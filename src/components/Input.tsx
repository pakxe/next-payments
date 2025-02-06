import {css, useTheme} from '@emotion/react';
import {ComponentProps} from 'react';

type Props = ComponentProps<'input'> & {
  status?: ElementStatus;
};

const Input = ({status = 'none', ...attrs}: Props) => {
  const {borderCSS} = useTheme();

  return (
    <input
      css={css`
        padding: 8px;

        width: 100%;

        ${borderCSS(status)};

        &:focus {
          ${borderCSS('focus')};
        }
      `}
      {...attrs}
    />
  );
};

export default Input;
