// 라이트, 다크와 같은 특성의 테마에 따라 쉽게 바뀔 수 있는 값들을 위해 모아놓은 것

import {css, keyframes} from '@emotion/react';

const colors = {
  alert: '#FF3D3D',
  gray5: '#000000',
  gray4: '#383839',
  gray3: '#8B95A1',
  gray2: '#ACACAC',
  gray1: '#FFFFFF',
} as const;

const cardColors = {
  bc: '#F04651',
  shinhan: '#0046FF',
  kakao: '#FFE600',
  hyundai: '#000000',
  woori: '#007BC8',
  lotte: '#ED1C24',
  hana: '#009490',
  kb: '#6A6056',
};

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const skeletonCSS = css`
  display: inline-block;
  background: linear-gradient(90deg, ${colors.gray4} 25%, ${colors.gray3} 50%, ${colors.gray4} 75%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite linear;
  border-radius: 8px;

  width: 100%;

  overflow: hidden;
`;

const theme = {
  colors,
  cardColors,
  skeletonCSS,
} as const;

export default theme;
