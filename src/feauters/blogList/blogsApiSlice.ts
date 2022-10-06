import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createSlice, nanoid } from '@reduxjs/toolkit';

import { Blog, BlogStub } from '../../common/type/blogs.type';
import { yymmdd } from '../../common/utils/date';

interface BlogsState {
  blogs: Blog[];
}

const initialState: BlogsState = {
  blogs: []
}

export const blogsSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    addLike: state => {
      state.blogs
    }
  }
})

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

export const { 
  useFetchBlogsQuery, 
  useUpdateLikeMutation,
  useAddBlogMutation } = blogsApiSlice;