import { configureStore } from '@reduxjs/toolkit';
import { blogsApiSlice } from '../../feauters/blogList/blogsApiSlice';
import { filterSlice } from '../../feauters/filterBlog/filterBlogSlice';

export const store = configureStore({
  reducer: {
    filters: filterSlice.reducer,
    [blogsApiSlice.reducerPath]: blogsApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(blogsApiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;