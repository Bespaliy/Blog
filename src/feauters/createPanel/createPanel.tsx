import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import './createPanel.css';

interface FormInputs {
  title: string;
  text: string;
  hashtag: string;
}

const CreatePanel = () => {

  const [hashtags, setHashtags] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
    setValue
  } = useForm<FormInputs>({
    reValidateMode: 'onChange'
  });

  const onSubmit: SubmitHandler<FormInputs> = (data: any) => {
    reset();
    setHashtags(() => []);
  }

  return (
    <aside className="panel">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="panel_title">
          <label htmlFor="title">BLOG TITLE</label>
          <input
            id="title"
            type="text"
            {...register('title', {
              required: 'Title is required',
            })} />
        </div>
        <div className="panel_text">
          <label htmlFor="text">TEXT OF BLOG</label>
          <textarea id="title" {...register('text', {
            required: 'Text is required',
          })} ></textarea>
        </div>
        <div className="panel_tags">
          <label htmlFor="tag">TAGS OF BLOG</label>
          <div className='panel_tags-main'>
            <input id="tags" defaultValue={'#'} {...register('hashtag')} />
            <button
              type='button'
              className='btn btn_3d'
              onClick={() => {
                const value = getValues('hashtag');
                if (value[0] !== '#') return;
                setHashtags((prev) => [...prev, value]);
                setValue('hashtag', '#');
              }}>
              ADD TAGS!
            </button>
          </div>
          <div className='hashtags-list'>
            {hashtags.map((tags, index) => {
              return <Hashtag key={`${tags}.${index}`} name={tags}/>
            })}
          </div>
        </div>
        <div className="panel_submit">
          <button type='submit' className='btn btn_3d'>CREATE BLOG!</button>
        </div>
      </form>
    </aside>
  )
}

const Hashtag = ({ name }: { name: string }) => {
  return (
    <p className="hashtag">
      {name}
    </p>
  );
}

export default CreatePanel;