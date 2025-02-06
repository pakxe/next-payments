import {TYPOGRAPHY} from '@/constants/typography';
import Z_INDEX from '@/constants/zIndex';
import {WithChildren} from '@/types/with';
import {css, useTheme} from '@emotion/react';

type Props = WithChildren & {};

const BottomButton = ({children}: Props) => {
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
    >
      {children}
    </button>
  );
};

export default BottomButton;
