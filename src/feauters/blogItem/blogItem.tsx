import { memo } from "react";
import { FaComment, FaHeart, FaBookmark } from 'react-icons/fa'
import { Blog } from "../../common/type/blogs.type";
import ButtonActivites from '../buttonActivites/buttonActivites';
import { 
  BlogContainer, 
  BlogHeader, BlogTitle, 
  BlogHastags,
  BlogLikes,
  BlogLikesLeft
} from './blogItem.style';

interface BlogItemProps {
  id: string;
  date: string;
  title: string;
  hashtags: string[];
  likes: number;
  text: string;
  handleUpdateLike: (blog: Blog) => void
}

const BlogItem = (props: BlogItemProps) => {

  const { id, text, date, title, hashtags, likes, handleUpdateLike } = props;

  const blog: Blog = { id, date, title, hashtags, likes, text };

  return (
    <BlogContainer>
      <BlogHeader>
        <p>Auther Lastname</p>
        <p>{date}</p>
      </BlogHeader>
      <BlogTitle>
        <p className='title'>{title}</p>
      </BlogTitle>
      <BlogHastags>
        {hashtags.map((hash) => <p key={hash} className='hashtags'>{hash}</p>)}
      </BlogHastags>
      <BlogLikes>
        <BlogLikesLeft>
          <ButtonActivites 
            Child={<FaHeart />}
            alt={"number of likes"}
            count={likes}
            handlerOnCLick={() => handleUpdateLike({ ...blog, likes: Number(likes) + 1 })} />
          <ButtonActivites 
            Child={<FaComment />}
            alt={"number of likes"}
            count={90} />
        </BlogLikesLeft>
        <ButtonActivites 
          Child={<FaBookmark />}
          alt={"number of likes"}
          count={90} />
      </BlogLikes>
    </BlogContainer>
  )
}

export default memo(BlogItem);