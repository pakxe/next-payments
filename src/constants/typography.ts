// 상수 파일은 변형될 가능성이 크므로 default export 를 사용하지 않음

export const TYPOGRAPHY = {
  title: {
    fontSize: '18px',
    fontWeight: '700',
  },
  subTitle: {
    fontSize: '15px',
    fontWeight: '700',
  },
  body: {
    fontSize: '12px',
    fontWeight: '500',
  },
  bodyBold: {
    fontSize: '16px',
    fontWeight: '600',
    lineHeight: '24px',
  },
  caption: {
    fontSize: '9.5px',
    fontWeight: '400',
  },
  card: {
    fontSize: '14px',
    fontWeight: '500',
    letterSpacing: '8%',
  },
} as const;
