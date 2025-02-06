/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import {useRouter} from 'next/router';
import Text from './Text';
import Button from './Button';

const InvalidTouch = () => {
  const router = useRouter();

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        text-align: center;

        gap: 32px;
      `}
    >
      <Text as="h1" type="title">
        올바른 접근이 아닙니다.
      </Text>

      <Button onClick={() => router.back()} fullWidth>
        이전 페이지로 이동
      </Button>
    </div>
  );
};

export default InvalidTouch;
