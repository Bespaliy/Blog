import { TextareaStyle } from '../styles/Texrarea.style';

type TextareaEvent = React.ChangeEvent<HTMLTextAreaElement>;

interface TextareaProp {
  label?: string;
  name: string;
  value?: string;
  setValue: (value: React.SetStateAction<string>) => void;
}

const Textarea = (props: TextareaProp) => {

  const { label, name, value, setValue } = props;

  const handleChangeTextarea = (e: TextareaEvent) => {
    setValue(() => e.target.value)
  }

  
  return (
    <>
      {label ? <label htmlFor={name}>{label}</label> : null}
      <TextareaStyle id={name} value={value ?? ''} onChange={(e) => handleChangeTextarea(e)}></TextareaStyle>
    </>
  );
}

export default Textarea;