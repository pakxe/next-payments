import {css, useTheme} from '@emotion/react';
import Text from './Text';
import Image from 'next/image';

type Props = Omit<Card, 'company' | 'brand'> & {
  company: CardCompany | null;
};

const getCardBrand = (cardPrefix: string): CardBrand => {
  const sanitizedPrefix = cardPrefix.replace(/\D/g, ''); // 숫자만 남기기

  if (/^4/.test(sanitizedPrefix)) return 'visa';
  if (/^5[1-5]/.test(sanitizedPrefix) || /^2(2[2-9]|[3-6]|7[0-1])/.test(sanitizedPrefix)) {
    return 'master';
  }
  return 'none';
};

const Card = ({company, name, expiration, cardNumber}: Props) => {
  const {cardColors, colors} = useTheme();

  return (
    <div
      css={css`
        max-width: 300px;
        width: 60%;
        min-width: 200px;

        aspect-ratio: 1.61;

        border-radius: 4px;

        padding: 8px 12px;

        box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.25);

        background-color: ${company ? cardColors[company] : colors.gray4};

        display: flex;
        flex-direction: column;
        gap: 12px;
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: space-between;

          width: 100%;
          height: 20%;

          position: relative;
        `}
      >
        <div
          css={css`
            width: 18%;

            background-color: #ddcd78;

            border-radius: 4px;
          `}
        />
        <div>
          {getCardBrand(cardNumber[0]) === 'visa' ? (
            <Image src="/visa.png" alt="visa" width={100} height={100} style={{width: 'auto', height: '100%'}} />
          ) : getCardBrand(cardNumber[0]) === 'master' ? (
            <Image src="/master.png" alt="master" width={100} height={100} style={{width: 'auto', height: '100%'}} />
          ) : null}
        </div>
      </div>
      <Text color="gray1" type="card">
        {cardNumber.join(' ')}
      </Text>
      <Text color="gray1" type="card">
        {expiration.month !== '' || expiration.year !== '' ? `${expiration.month} / ${expiration.year}` : ''}
      </Text>
      <Text color="gray1" type="card">
        {name.toUpperCase()}
      </Text>
    </div>
  );
};

export default Card;
