import {css, SerializedStyles, useTheme} from '@emotion/react';
import {ComponentPropsWithoutRef} from 'react';
import {TYPOGRAPHY} from '../constants/typography';
import theme from '../theme';

type AsType = 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type Props<T extends AsType = 'p'> = {
  as?: T; // 동적으로 태그를 전달
  type?: keyof typeof TYPOGRAPHY;
  color?: keyof typeof theme.colors;
  cssProp?: SerializedStyles | SerializedStyles[];
  children: string;
  textAlign?: 'left' | 'center' | 'right';
} & ComponentPropsWithoutRef<T>;

const Text = <T extends AsType = 'p'>({
  textAlign = 'center',
  type = 'body',
  color,
  children,
  cssProp,
  ...rest
}: Props<T>) => {
  const {colors} = useTheme();
  const Element: React.ElementType = rest.as || 'p';

  return (
    <Element
      css={css`
        ${TYPOGRAPHY[type]}
        color: ${color ? colors[color] : colors.gray5};

        text-align: ${textAlign || 'left'};

        display: flex;
        ${cssProp}
      `}
      {...rest}
    >
      {children}
    </Element>
  );
};
export default Text;
