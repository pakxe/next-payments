import {WithChildren} from '@/types/with';
import {css, useTheme} from '@emotion/react';
import {ComponentProps} from 'react';

type Props = ComponentProps<'button'> &
  WithChildren & {
    fullWidth?: boolean;
  };

const Button = ({fullWidth, children, ...attrs}: Props) => {
  const {colors} = useTheme();

  return (
    <button
      css={css`
        background-color: ${colors.gray5};
        color: ${colors.gray1};
        padding: 12px 0;

        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 8px;

        width: ${fullWidth ? '100%' : 'auto'};
      `}
      {...attrs}
    >
      {children}
    </button>
  );
};

export default Button;
