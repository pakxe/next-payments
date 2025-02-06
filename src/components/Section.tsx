import {WithChildren} from '@/types/with';
import Text from './Text';
import {ReactElement} from 'react';

type SectionProps = WithChildren & {
  header: ReactElement<typeof SectionHeader>;
};

const Section = ({header, children}: SectionProps) => {
  return (
    <section>
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
    <header>
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
