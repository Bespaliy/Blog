import { memo } from "react";
import { FaComment, FaHeart, FaBookmark } from 'react-icons/fa'
import { Blog } from "../../common/type/blogs.type";
import ButtonActivites from '../buttonActivites/buttonActivites';

interface BlogItemProps {
  id: number;
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
    <div className='blog-body'>
      <div className='blog-body_header'>
        <p className='name'>Auther Lastname</p>
        <p className='date'>{date}</p>
      </div>
      <div className='blog-body_title'>
        <p className='title'>{title}</p>
      </div>
      <div className='blog-body_hashtags'>
        {hashtags.map((hash) => <p key={hash} className='hashtags'>{hash}</p>)}
      </div>
      <div className='blog-body_likes'>
        <div className='blog-body_likes-left'>
          <ButtonActivites 
            Child={<FaHeart />}
            alt={"number of likes"}
            count={likes}
            handlerOnCLick={() => handleUpdateLike({ ...blog, likes: Number(likes) + 1 })} />
          <ButtonActivites 
            Child={<FaComment />}
            alt={"number of likes"}
            count={90} />
        </div>
        <ButtonActivites 
          Child={<FaBookmark />}
          alt={"number of likes"}
          count={90} />
      </div>
    </div>
  )
}

export default memo(BlogItem);