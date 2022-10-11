import { useState, useRef } from 'react';
import { useAddBlogMutation } from '../blogList/blogsApiSlice';
import { BlogStub } from '../../common/type/blogs.type';
import { Panel, PanelContent, PanelSubmit, HashtagsContainer, HashtagsListStyle } from './createPanel.style';
import Button from '../../common/components/Button';
import Input from '../../common/components/Input';
import Textarea from '../../common/components/Textarea';

type FormEvent = React.FormEvent<HTMLFormElement>;

const CreatePanel = () => {

  const [hashtags, setHashtags] = useState<string[]>([]);
  const [title, setTitle] = useState<string>('');
  const [text, setText] = useState<string>('');

  const inputRef = useRef<HTMLInputElement | null>(null);

  const [addBlog] = useAddBlogMutation();

  const handleAddHashtag = () => {
    const value = inputRef.current?.value || '';
    if (value[0] !== '#') return;
    setHashtags((prev) => [...prev, value]);
    inputRef.current!.value = '#';
  }

  const resetForm = () => {
    setTitle(() => '');
    setHashtags(() => []);
    setText(() => '');
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log({ text, title, hashtags });
    const blogStub: BlogStub = { text, title, hashtags };
    addBlog(blogStub)
      .unwrap()
      .finally(() => {
        resetForm();
      });
  }

  return (
    <Panel>
      <form onSubmit={(e) => handleSubmit(e)}>
        <PanelContent>
          <Input label={'CHOOSE TITLE'} value={title} name={'title'} setValue={() => setTitle} />
        </PanelContent>

        <PanelContent>
          <Textarea label={'PRINT TEXT'} value={text} name={'text'} setValue={setText} />
        </PanelContent>

        <PanelContent>
          <HashtagsContainer>
            <Input name={'tags'} defaultValue={'#'} inputRef={inputRef} />
            <Button type='button' name={'ADD TAGS!'} onClick={handleAddHashtag} />
          </HashtagsContainer>
          <HashtagList hashtags={hashtags} />
        </PanelContent>

        <PanelSubmit>
          <Button type='submit' name={'CREATE BLOG!'} />
        </PanelSubmit>
      </form>
    </Panel>
  )
}

const Hashtag = ({ name }: { name: string }) => {
  return (
    <p>
      {name}
    </p>
  );
}

const HashtagList = ({ hashtags }: { hashtags: string[] }) => {
  return (
    <HashtagsListStyle>
      {hashtags.map((tags, index) => {
        return <Hashtag key={`${tags}.${index}`} name={tags} />
      })}
    </HashtagsListStyle>
  );
}

export default CreatePanel;