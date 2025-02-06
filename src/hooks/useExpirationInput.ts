import {useState} from 'react';

type Props = {
  defaultValue?: Date;
};

type Date = {
  year: number;
  month: number;
};

// TODO: 리펙, useNumberInput와 유사
const useExpirationInput = ({defaultValue}: Props = {}) => {
  const [date, setData] = useState<{
    year: string;
    month: string;
  }>({year: defaultValue ? String(defaultValue.month) : '', month: defaultValue ? String(defaultValue.month) : ''});
  const [errors, setErrors] = useState<{
    year: boolean;
    month: boolean;
  }>({
    year: false,
    month: false,
  });

  const handleYear = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newYear = e.target.value;

    // 유효성 검사
    if (e.target.value.length > 2) {
      return;
    }

    if (Number.isNaN(Number(newYear))) {
      setErrors(prev => {
        return {
          ...prev,
          year: true,
        };
      });
      return;
    }

    if (Number(newYear) < 0 || Number(newYear) > 99) {
      setErrors(prev => {
        return {
          ...prev,
          year: true,
        };
      });
      return;
    }

    const currentYear = Number(String(new Date().getFullYear()).slice(2, 4));

    if (Number(newYear) < currentYear) {
      setData(prev => {
        return {
          ...prev,
          year: newYear,
        };
      });
      setErrors(prev => {
        return {
          ...prev,
          year: true,
        };
      });
      return;
    }

    setErrors(prev => {
      return {
        ...prev,
        year: false,
      };
    });
    setData(prev => {
      return {
        ...prev,
        year: newYear,
      };
    });
  };

  const handleMonth = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMonth = e.target.value;

    // 유효성 검사
    if (e.target.value.length > 2) {
      return;
    }

    if (Number.isNaN(Number(newMonth))) {
      setErrors(prev => {
        return {
          ...prev,
          month: true,
        };
      });
      return;
    }

    if (Number(newMonth) < 1 || Number(newMonth) > 12) {
      setData(prev => {
        return {
          ...prev,
          month: newMonth,
        };
      });
      setErrors(prev => {
        return {
          ...prev,
          month: true,
        };
      });
      return;
    }

    setErrors(prev => {
      return {
        ...prev,
        month: false,
      };
    });
    setData(prev => {
      return {
        ...prev,
        month: newMonth,
      };
    });
  };

  const fillZero = () => {
    setData(prev => {
      return {
        ...prev,
        month: prev.month.padStart(2, '0'),
      };
    });
  };

  return {date, handleYear, handleMonth, errors, fillZero, isValid: !!date.year && !!date.month};
};

export default useExpirationInput;
