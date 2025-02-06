import {TYPOGRAPHY} from '@/constants/typography';
import Z_INDEX from '@/constants/zIndex';
import {WithChildren} from '@/types/with';
import {css, useTheme} from '@emotion/react';
import {ComponentProps} from 'react';

type Props = WithChildren & ComponentProps<'button'>;

const BottomButton = ({children, ...attrs}: Props) => {
  const {colors} = useTheme();

  return (
    <button
      css={css`
        width: 100%;

        position: fixed;
        bottom: 0;
        left: 0;

        background-color: ${colors.gray5};
        color: ${colors.gray1};

        padding: 20px 0;

        z-index: ${Z_INDEX.BOTTOM_BUTTON};

        display: flex;
        justify-content: center;
        align-items: center;

        ${TYPOGRAPHY.subTitle}
      `}
      {...attrs}
    >
      {children}
    </button>
  );
};

export default BottomButton;
