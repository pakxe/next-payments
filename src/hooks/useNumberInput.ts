import isStrictNumeric from '@/utils/isStrictNumeric';
import {ChangeEvent, useState} from 'react';

type Props = {
  length: number;
  defaultValue?: number;
};

const useNumberInput = ({length, defaultValue}: Props) => {
  const [value, setValue] = useState<string>(defaultValue ? String(defaultValue) : '');
  const [isError, setIsError] = useState<boolean>(false);

  const handleValue = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    if (newValue.length > length) {
      return;
    }

    if (newValue.length === 0) {
      setValue(newValue);
      return;
    }

    if (!isStrictNumeric(newValue)) {
      setIsError(true);
      return;
    }

    setIsError(false);
    setValue(newValue);
  };

  return {
    value,
    onChange: handleValue,
    isError,
    isValid: !isError && value.length === length,
  };
};

export default useNumberInput;
