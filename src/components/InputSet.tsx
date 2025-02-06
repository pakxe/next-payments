import {ReactElement} from 'react';
import Input from './Input';
import {css} from '@emotion/react';
import {TYPOGRAPHY} from '@/constants/typography';

type InputChildren = ReactElement<typeof Input> | ReactElement<typeof Input>[];

type Props = {
  labelText?: string;
  input: InputChildren;
};

const InputSet = ({labelText, input}: Props) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;

        gap: 8px;
      `}
    >
      <label
        css={css`
          ${TYPOGRAPHY.body}
        `}
      >
        {labelText}
      </label>
      <div
        css={css`
          display: flex;

          gap: 10px;
        `}
      >
        {input}
      </div>
    </div>
  );
};

export default InputSet;
