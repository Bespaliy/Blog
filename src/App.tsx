import BlogList from './feauters/blogList/blogList';
import CreatePanel from './feauters/createPanel/createPanel';
import FilterBlogs from './feauters/filterBlog/filterBlog';
import { useFetchBlogsQuery } from './feauters/blogList/blogsApiSlice';
import styled from 'styled-components';

function App() {
  useFetchBlogsQuery();
  return (
    <AppStyle>
      <FilterBlogs />
      <BlogList />
      <CreatePanel />
    </AppStyle>
  )
}

const AppStyle = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: center;
`

export default App
