import Button from '@/components/Button';
import InvalidTouch from '@/components/InvalidTouch';
import SkeletonBlinker from '@/components/SkeletonBlinker';
import Text from '@/components/Text';
import CARD_COMPANIES from '@/constants/cardCompanies';
import {css} from '@emotion/react';
import Image from 'next/image';
import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';

const ALLOWED_TIME_DIFF = 30 * 1000;

type Props = {
  cardNumber: string;
  company: CardCompany;
};

const CompleteCardRegistration = ({cardNumber, company}: Props) => {
  const companyName = CARD_COMPANIES.find(({value}) => value === company)?.name || '알 수 없음';

  return (
    <>
      <Image
        data-skeleton
        src={`${process.env.NEXT_PUBLIC_BASE_NAME}/check.png`}
        width={100}
        height={100}
        alt="check"
      />
      <Text data-skeleton as="h1" type="title">
        {cardNumber}로 시작하는
        <br />
        {companyName}가 등록되었어요.
      </Text>
      <Button data-skeleton fullWidth>
        확인
      </Button>
    </>
  );
};

const CompleteCardRegistrationPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isValidAccess, setIsValidAccess] = useState(true);

  useEffect(() => {
    if (!router.isReady) return;

    setIsLoading(false);
    if (!router.query.cardNumber || !router.query.company || !router.query.ts) return setIsValidAccess(false);

    const now = Date.now();
    const ts = Number(router.query.ts);

    if (!ts || now - ts > ALLOWED_TIME_DIFF) return setIsValidAccess(false);

    setIsValidAccess(true);
  }, [router.isReady, router.query]);

  if (!isValidAccess) {
    return <InvalidTouch />;
  }

  return (
    <main
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        height: 100vh;

        gap: 32px;
      `}
    >
      <SkeletonBlinker isLoading={isLoading}>
        <CompleteCardRegistration
          cardNumber={router.query.cardNumber as string}
          company={router.query.company as CardCompany}
        />
      </SkeletonBlinker>
    </main>
  );
};

export default CompleteCardRegistrationPage;
