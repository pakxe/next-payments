import CARD_COMPANIES from '@/constants/cardCompanies';
import useNumberInput from './useNumberInput';
import useNumberInputs from './useNumberInputs';
import useSelectedValue from './useSelectedValue';
import useExpirationInput from './useExpirationInput';
import useNameInput from './useNameInput';
import {NAME_LENGTH, VALID_NAME_CHARACTERS_REGEX} from '@/constants/system';

const useCardRegistration = () => {
  const cvcHandler = useNumberInput({length: 3});
  const passwordHandler = useNumberInput({length: 2});
  const cardNumbersHandler = useNumberInputs({length: 4, count: 4});
  const companyHandler = useSelectedValue(
    null,
    CARD_COMPANIES.map(company => company.value),
  );
  const expirationHandler = useExpirationInput();
  const ownerNameHandler = useNameInput({
    maxLength: NAME_LENGTH.MAX,
    minLength: NAME_LENGTH.MIN,
    regex: VALID_NAME_CHARACTERS_REGEX,
  });

  return {
    cvcHandler,
    passwordHandler,
    cardNumbersHandler,
    companyHandler,
    expirationHandler,
    ownerNameHandler,
  };
};

export default useCardRegistration;
