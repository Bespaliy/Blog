import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { nanoid } from '@reduxjs/toolkit';

import { Blog, BlogStub } from '../../common/type/blogs.type';
import { yymmdd } from '../../common/utils/date';

export interface BlogsState {
  blogs: Blog[];
}

export const blogsApiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000',
    prepareHeaders(headers) {
      return headers;
    },
  }),
  tagTypes: ['Blogs'],
  endpoints(builder) {
    return {
      fetchBlogs: builder.query<Blog[], number | void>({
        query: () => `/blogs`,
        providesTags: ['Blogs']
      }),
      updateLike: builder.mutation<Blog, Partial<Blog>>({
        query: (blog) => ({
          url: `/blogs/${blog.id}`,
          method: 'PUT',
          body: blog
        }),
        invalidatesTags: ['Blogs']
      }),
      addBlog: builder.mutation<BlogStub, Partial<BlogStub>>({
        query: (blogStub) => {
          const { title, text, hashtags } = blogStub;
          const blog: Blog = {
            title: title!,
            text: text!,
            hashtags: hashtags!,
            id: nanoid(12),
            date: yymmdd,
            likes: 0 
          }
          return {
            url: `/blogs`,
            method: 'POST',
            body: blog
          }
        },
        invalidatesTags: ['Blogs']
      })
    };
  },
});

export const selectBlogsResult = blogsApiSlice.endpoints.fetchBlogs.select();


export const { 
  useFetchBlogsQuery, 
  useUpdateLikeMutation,
  useAddBlogMutation, } = blogsApiSlice;