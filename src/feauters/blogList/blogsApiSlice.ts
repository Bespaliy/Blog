import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createSlice } from '@reduxjs/toolkit';

import { Blog } from '../../common/type/blogs.type';

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
    };
  },
});

export const { useFetchBlogsQuery, useUpdateLikeMutation } = blogsApiSlice;