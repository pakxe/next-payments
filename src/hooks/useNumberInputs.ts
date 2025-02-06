import isStrictNumeric from '@/utils/isStrictNumeric';
import {ChangeEvent, useState} from 'react';

type Props = {
  count: number;
  length: number;
  defaultValue?: number[];
};

const useNumberInputs = ({count, length, defaultValue}: Props) => {
  const [values, setValues] = useState<string[]>(
    defaultValue ? defaultValue.map(n => String(n)) : Array.from({length: count}, () => ''),
  );
  const [errors, setErrors] = useState<boolean[]>(Array.from({length: count}, () => false));

  const handleValue = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    if (index < 0 || index >= count) return;

    const newValue = e.target.value;

    if (newValue.length > length) {
      return;
    }

    if (newValue.length === 0) {
      setErrors(p => {
        const copy = [...p];
        copy[index] = false;
        return copy;
      });
      setValues(p => {
        const copy = [...p];
        copy[index] = newValue;
        return copy;
      });
      return;
    }

    if (!isStrictNumeric(newValue)) {
      setErrors(p => {
        const copy = [...p];
        copy[index] = true;
        return copy;
      });
      return;
    }

    setErrors(p => {
      const copy = [...p];
      copy[index] = false;
      return copy;
    });
    setValues(p => {
      const copy = [...p];
      copy[index] = newValue;
      return copy;
    });
  };

  const handleErrorCheck = (index: number) => {
    if (index < 0 || index >= count) return;

    if (values[index].length < length) {
      setErrors(p => {
        const copy = [...p];
        copy[index] = true;
        return copy;
      });
    }
  };

  return {
    values,
    onChange: handleValue,
    errors,
    handleErrorCheck,
    isValid: values.every(value => value.length === length),
  };
};

export default useNumberInputs;
