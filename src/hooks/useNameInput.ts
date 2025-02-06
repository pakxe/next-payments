import {useState} from 'react';

type Props = {
  maxLength: number;
  minLength: number;
  defaultValue?: string;
  regex?: RegExp;
};

// 공백을 하나만 두는 입력을 이름 입력이라고 정의
const useNameInput = ({maxLength, minLength, defaultValue, regex}: Props) => {
  const [name, setName] = useState<string>(defaultValue || '');
  const [isError, setIsError] = useState<boolean>(false);

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;

    if (newName.length > maxLength) {
      return;
    }

    if (newName.length === 0) {
      setName(newName);
      return;
    }

    if (regex && !regex.test(newName)) {
      return;
    }

    if (newName.length < minLength) {
      setIsError(true);
      setName(newName);
      return;
    }

    if (name.length === 0 && newName.length === 1 && newName === ' ') {
      return;
    }

    if (name.length >= 1 && name[name.length - 1] === ' ' && newName[newName.length - 1] === ' ') {
      return;
    }

    setName(newName);
    setIsError(false);
  };

  return {name, handleName, isError, isValid: !isError && name.length >= minLength};
};

export default useNameInput;
