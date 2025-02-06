import makeChildrenArray from '@/utils/makeChildrenArray';
import {css, useTheme} from '@emotion/react';
import {cloneElement, ComponentProps, ReactElement, useState} from 'react';
import Text from './Text';

type Value = string | number;

type OptionType = ReactElement<ComponentProps<typeof Option>>;

type DropdownProps = {
  defaultValue?: Value;
  children: OptionType | OptionType[];
  placeHolder?: string;

  onChange?: (value: Value) => void;
};

const Dropdown = ({children, onChange, defaultValue, placeHolder}: DropdownProps) => {
  const childrenArray = makeChildrenArray(children);
  const firstName = placeHolder
    ? ''
    : defaultValue
    ? childrenArray.find(child => child.props.value === defaultValue)?.props.children
    : childrenArray[0].props.children;
  const [selectedName, setSelectedName] = useState<Value | undefined>(firstName);

  const [isOpen, setIsOpen] = useState(false);

  const {borderCSS, colors} = useTheme();

  const handleOptionClick = (value: Value, name: Value) => {
    setSelectedName(name);
    setIsOpen(false);

    if (onChange) {
      onChange(value);
    }
  };

  const handleButtonClick = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div
      css={css`
        position: relative;
      `}
    >
      <button
        onClick={handleButtonClick}
        css={css`
          width: 100%;

          color: ${selectedName === '' && placeHolder ? colors.gray3 : colors.gray5};

          padding: 8px;

          ${borderCSS(isOpen ? 'focus' : 'none')};
        `}
      >
        {selectedName === '' && placeHolder ? placeHolder : selectedName}
      </button>
      <Text
        cssProp={css`
          position: absolute;
          right: 8px;
          top: 8px;

          transform: ${isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
          transition: transform 0.3s ease-in-out;
        `}
      >
        △
      </Text>

      {isOpen && (
        <ul
          css={css`
            position: absolute;
            left: 0;

            width: 100%;

            padding: 8px;

            background-color: ${colors.gray1};

            display: flex;
            flex-direction: column;
            gap: 16px;
            ${borderCSS()};
          `}
        >
          {childrenArray.map(child => {
            return cloneElement(child, {
              onClick: handleOptionClick,
            });
          })}
        </ul>
      )}
    </div>
  );
};

type OptionProps = {
  value: Value;
  children: Value;

  onClick?: (value: Value, name: Value) => void;
};

const Option = ({value, onClick, children}: OptionProps) => {
  return (
    <li
      key={value}
      onClick={() => {
        if (onClick) {
          onClick(value, children);
        }
      }}
      css={css`
        cursor: pointer;
      `}
    >
      {children}
    </li>
  );
};

Dropdown.Option = Option;

export default Dropdown;
