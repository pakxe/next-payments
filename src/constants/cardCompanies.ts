type CardCompanyValue = {
  name: string;
  value: CardCompany;
};

const CARD_COMPANIES: CardCompanyValue[] = [
  {
    name: '비씨카드',
    value: 'bc',
  },
  {
    name: '신한카드',
    value: 'shinhan',
  },
  {
    name: '카카오뱅크',
    value: 'kakao',
  },
  {
    name: '현대카드',
    value: 'hyundai',
  },
  {
    name: '우리카드',
    value: 'woori',
  },
  {
    name: '롯데카드',
    value: 'lotte',
  },
  {
    name: '하나카드',
    value: 'hana',
  },
  {
    name: '국민카드',
    value: 'kb',
  },
];

export default CARD_COMPANIES;
