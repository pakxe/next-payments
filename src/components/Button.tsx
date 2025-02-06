import {WithChildren} from '@/types/with';
import {css} from '@emotion/react';
import {ComponentProps} from 'react';

type Props = ComponentProps<'button'> &
  WithChildren & {
    fullWidth?: boolean;
  };

const Button = ({fullWidth, children, ...attrs}: Props) => {
  return (
    <button
      css={css`
        width: ${fullWidth ? '100%' : 'auto'};
      `}
      {...attrs}
    >
      {children}
    </button>
  );
};

export default Button;
