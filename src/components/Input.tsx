import {css, useTheme} from '@emotion/react';
import {ComponentProps} from 'react';

type Props = ComponentProps<'input'> & {
  isError?: boolean;
};

const Input = ({isError = false, ...attrs}: Props) => {
  const {borderCSS} = useTheme();

  return (
    <input
      css={css`
        padding: 8px;

        width: 100%;

        ${borderCSS(isError ? 'error' : 'none')};

        &:focus {
          ${borderCSS(isError ? 'error' : 'focus')};
        }
      `}
      {...attrs}
    />
  );
};

export default Input;
