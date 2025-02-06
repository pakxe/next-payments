import {WithChildren} from '@/types/with';
import {css} from '@emotion/react';

const Layout = ({children}: WithChildren) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;

        background-color: lightgray;
      `}
    >
      <div
        css={css`
          max-width: 768px;
          width: 100%;
          min-height: 100vh;

          padding: 0 1rem;

          display: flex;
          flex-direction: column;
          justify-content: start;

          background-color: white;
        `}
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
