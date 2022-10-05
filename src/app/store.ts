
import { configureStore } from '@reduxjs/toolkit';
import { blogsApiSlice } from '../feauters/blogList/blogsApiSlice';

export const store = configureStore({
  reducer: {
    [blogsApiSlice.reducerPath]: blogsApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(blogsApiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;