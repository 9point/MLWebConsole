import React, { useEffect, useState } from 'react';
import Text from '../components/Text';

import classnames from 'classnames';

import './LeftPaneSelector.css';

export interface LeftPaneSelectorOption {
  id: string;
  name: string;
}

export interface Props {
  onSelect: (option: LeftPaneSelectorOption) => void;
  options: LeftPaneSelectorOption[];
  selectedID: string;
}

export default function LeftPaneSelector(props: Props) {
  const [isActive, setIsActive] = useState(false);

  // Register click event for deactivating.
  useEffect(() => {
    if (!isActive) {
      return;
    }

    function offClick() {
      setIsActive(false);
    }

    document.addEventListener('click', offClick);

    return () => document.removeEventListener('click', offClick);
  }, [isActive]);

  function onClickSelector() {
    setIsActive((wasActive) => !wasActive);
  }

  const selectedOption = props.options.find((o) => o.id === props.selectedID);
  if (!selectedOption) {
    throw Error(`No option found with selectedID: ${props.selectedID}`);
  }

  return (
    <div className="LeftPaneSelector-Root">
      <div
        className={classnames({
          'LeftPaneSelector-Selector': true,
          'LeftPaneSelector-SelectorActive': isActive,
        })}
        role="button"
      >
        <div
          className="LeftPaneSelector-SelectorContent"
          onClick={onClickSelector}
        >
          <div
            className={classnames(
              'LeftPaneSelector-DropdownHandle',
              'margin-right-8px',
            )}
          />
          <Text displayStyle="Block" fontStyle="SecondaryNormal">
            {selectedOption.name}
          </Text>
        </div>
        <div
          className={classnames({
            'LeftPaneSelector-Dropdown': true,
            'LeftPaneSelector-DropdownHidden': !isActive,
            'role-dropdown': true,
          })}
        >
          {props.options.map((option) => (
            <div
              className="LeftPaneSelector-Dropdown-Item"
              key={option.id}
              onClick={() => props.onSelect(option)}
              role="button"
            >
              <Text>{option.name}</Text>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
