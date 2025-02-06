import {SerializedStyles, useTheme} from '@emotion/react';
import {Children, cloneElement, isValidElement, memo, ReactElement, ReactNode} from 'react';
import Skeleton from './Skeleton';

const getCSS = (props: any) => {
  return props.cssProp ? props.cssProp : props.css ? props.css : {};
};

const SkeletonUI = ({cssProp}: {cssProp?: SerializedStyles}) => {
  const {skeletonCSS} = useTheme();

  return <span css={[skeletonCSS, cssProp]} />;
};

const executeAndTransform = (Component: any, props: any, isLoading: boolean) => {
  const jsx = Component({...props, isLoading});
  return jsx;
};

const transformSkeleton = (
  node: ReactElement<{children: ReactNode}> | ReactElement<{children: ReactNode}>[],
  isLoading: boolean,
): ReactNode => {
  if (!node) return;

  if (Array.isArray(node)) {
    return node.map(child => transformSkeleton(child, isLoading));
  }

  if (!isValidElement(node)) {
    return node; // 문자열, 숫자 등 기본 노드는 그대로 반환
  }

  const {type, props} = node as ReactElement<any>;

  // 1️⃣ `data-skeleton`이 있는 요소라면 무조건 스켈레톤 UI로 변경
  if (props['data-skeleton']) {
    if (typeof type !== 'string' && type.name === 'Text' && isLoading)
      return <Skeleton.Text type={props.type} cssProp={props.cssProp} />;
    if ('alt' in props && isLoading) return <Skeleton.Image {...props} />;

    return isLoading ? <SkeletonUI cssProp={getCSS(props)} /> : node;
  }

  // 기본 html
  if (typeof type === 'string') {
    return cloneElement(node, {
      children: Children.map(props.children, child => transformSkeleton(child, isLoading)),
    });
  }

  // 사용자 정의 컴포넌트 까기 전
  if (typeof type === 'function') {
    const jsx = executeAndTransform(type, props, isLoading);
    return transformSkeleton(jsx, isLoading);
  }

  // 까진거 | emotion element
  return cloneElement(node, {
    children: Children.map(props.children, child => transformSkeleton(child, isLoading)),
  });
};

const SkeletonBlinker = ({
  children,
  isLoading,
}: {
  children: ReactElement<{children: ReactNode}>;
  isLoading: boolean;
}) => {
  const transformedChildren = transformSkeleton(children, isLoading);

  return <>{transformedChildren}</>;
};

export default SkeletonBlinker;
