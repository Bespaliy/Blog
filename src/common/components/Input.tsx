import { InputStyle } from '../styles/Input.style';

type InputEvent = React.ChangeEvent<HTMLInputElement>;
type RefInput = React.MutableRefObject<HTMLInputElement | null>;

interface InputProp {
  label?: string;
  name: string;
  value?: string;
  defaultValue?: string;
  inputRef?: RefInput;
  type?: string; 
  setValue?: (value: React.SetStateAction<string>) => void;
}

const Input = (props: InputProp) => {

  const { label, name, value, defaultValue, inputRef, setValue, type } = props;

  const handleChangeInput = (e: InputEvent) => {
    if (setValue) setValue(() => e.target.value);
  }

  
  return (
    <>
      {label ? <label htmlFor={name}>{label}</label> : null}
      <InputStyle
        id={name}
        type={type}
        defaultValue={defaultValue} 
        value={value}
        ref={inputRef}
        onChange={(e) => handleChangeInput(e)}/>
    </>
  );
}

export default Input;