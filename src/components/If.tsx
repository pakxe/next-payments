type Props = {
  condition: boolean;
  children: React.ReactNode;
};

const If = ({condition, children}: Props) => {
  if (condition) {
    return children;
  }

  return null;
};

export default If;
