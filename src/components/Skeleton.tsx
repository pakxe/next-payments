import {ComponentProps} from 'react';
import {useTheme} from '@emotion/react';
import Text from './Text';
import Image from 'next/image';
import {css} from '@emotion/react';

type SkeletonTextProps = Omit<ComponentProps<typeof Text>, 'children'>;

const SkeletonText = ({...rest}: SkeletonTextProps) => {
  const {skeletonCSS} = useTheme();

  const getCssProp = () => {
    const cssProp = rest.cssProp ? rest.cssProp : [];

    const completedCssProp = Array.isArray(cssProp) ? cssProp : [cssProp];

    return [...completedCssProp, skeletonCSS];
  };

  return (
    <Text {...rest} cssProp={getCssProp()}>
      &nbsp;
    </Text>
  );
};

type SkeletonImage = ComponentProps<typeof Image>;

const SkeletonImage = ({...rest}: SkeletonImage) => {
  const {skeletonCSS} = useTheme();

  return (
    <div
      {...rest}
      css={[
        skeletonCSS,
        css`
          width: ${rest.width}px;
          height: ${rest.height}px;
        `,
      ]}
    />
  );
};

const Skeleton = {
  Text: SkeletonText,
  Image: SkeletonImage,
};

export default Skeleton;
