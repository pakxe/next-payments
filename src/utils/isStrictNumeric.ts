// 공백같은거 있으면 바로 걸리는 함수
const isStrictNumeric = (value: string) => {
  const regex = /^\d+$/;

  return regex.test(value);
};

export default isStrictNumeric;
