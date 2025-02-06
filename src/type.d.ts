type ElementStatus = 'focus' | 'none' | 'error';

type CardCompany = 'bc' | 'shinhan' | 'kakao' | 'hyundai' | 'woori' | 'lotte' | 'hana' | 'kb';
type CardBrand = 'visa' | 'master' | 'none';

type Card = {
  company: CardCompany;
  name: string;
  expiration: {
    month: string;
    year: string;
  };
  cardNumber: string[];
  brand: CardBrand;
};
