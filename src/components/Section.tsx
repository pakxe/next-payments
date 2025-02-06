import {WithChildren} from '@/types/with';
import Text from './Text';
import {ReactElement} from 'react';
import {css} from '@emotion/react';

type SectionProps = WithChildren & {
  header: ReactElement<typeof SectionHeader>;
};

const Section = ({header, children}: SectionProps) => {
  return (
    <section
      css={css`
        display: flex;
        flex-direction: column;
        gap: 16px;

        width: 100%;
      `}
    >
      {header}
      {children}
    </section>
  );
};

type SectionHeaderProps = {
  title: string;
  description?: string;
};

const SectionHeader = ({title, description}: SectionHeaderProps) => {
  return (
    <header
      css={css`
        display: flex;
        flex-direction: column;
        gap: 4px;
      `}
    >
      <Text as="h2" type="title">
        {title}
      </Text>
      {description && (
        <Text type="caption" color="gray3">
          {description}
        </Text>
      )}
    </header>
  );
};

Section.Header = SectionHeader;

export default Section;
