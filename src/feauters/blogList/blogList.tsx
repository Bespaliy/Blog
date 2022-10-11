import { useCallback, useEffect } from 'react';
import { useUpdateLikeMutation, selectBlogsResult } from './blogsApiSlice';
import BlogItem from '../blogItem/blogItem';
import { Blog } from '../../common/type/blogs.type';
import { BlogListContainer } from './blogList.style';
import { useAppSelector } from '../../common/api/hooks';
import { createSelector } from '@reduxjs/toolkit';

const BlogList = () => {

	const [updateLike] = useUpdateLikeMutation();

	const filterTriger = useAppSelector(state => state.filters.filter);
	const popularTriger = useAppSelector(state => state.filters.popular);

  const filtredBlogsSelector = createSelector(
    selectBlogsResult,
    result => result.data?.filter(({ likes, hashtags }) => {
			if (!filterTriger) return true;
      const isExist = hashtags.includes(filterTriger);
			const isPopular = popularTriger === 'popular' ? likes > 100 : false;
			return (isExist || isPopular);
    })
  );

	const list = useAppSelector(filtredBlogsSelector);

	useEffect(() => {
		console.log(popularTriger);
	})

	const handleUpdateLike = useCallback((blog: Blog) => {
		updateLike(blog).unwrap();
	}, [updateLike]);
	

	const renderBlogs = () => {
		return list?.map((blog) => {
			return <BlogItem
								key={blog.id}
								id={blog.id}
								text={blog.text}
								handleUpdateLike={handleUpdateLike}
								title={blog.title} 
								date={blog.date} 
								hashtags={blog.hashtags} 
								likes={blog.likes} />
		});
	}

	return (
		<BlogListContainer>
			{renderBlogs()}
		</BlogListContainer>
	)
}

export default BlogList;