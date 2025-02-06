import {css, useTheme} from '@emotion/react';
import Text from './Text';

type Props = Card & {};

const Card = ({company, name, expiration, cardNumber, brand}: Props) => {
  const {cardColors, colors} = useTheme();

  const [month, year] = expiration;

  return (
    <div
      css={css`
        max-width: 500px;
        width: 60%;
        aspect-ratio: 1.61;

        border-radius: 4px;

        padding: 8px 12px;

        box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.25);

        background-color: ${cardColors[company] ?? colors.gray4};
      `}
    >
      <Text color="gray1" type="card">
        {cardNumber.join(' ')}
      </Text>
      <Text color="gray1" type="card">
        {month} / {year}
      </Text>
      <Text color="gray1" type="card">
        {name}
      </Text>
    </div>
  );
};

export default Card;
