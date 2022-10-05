import { useCallback } from 'react';
import { useFetchBlogsQuery, useUpdateLikeMutation } from './blogsApiSlice';
import BlogItem from '../blogItem/blogItem';
import { Blog } from '../../common/type/blogs.type';

const BlogList = () => {

	const { data = [] } = useFetchBlogsQuery();
	const [updateLike] = useUpdateLikeMutation();

	const handleUpdateLike = useCallback((blog: Blog) => {
		updateLike(blog).unwrap();
	}, [updateLike]);
	
	const renderBlogs = () => {
		return data.map((blog) => {
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
		<main className='blog'>
			{renderBlogs()}
		</main>
	)
}

export default BlogList;