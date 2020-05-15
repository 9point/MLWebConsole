import React, { useEffect, useState } from 'react';
import Text from '../components/Text';

import classnames from 'classnames';

import './LeftPaneSelector.css';

export interface LeftPaneSelectorOption<TMode extends string> {
  mode: TMode;
  name: string;
}

export interface Props<TMode extends string> {
  onSelect: (option: LeftPaneSelectorOption<TMode>) => void;
  options: LeftPaneSelectorOption<TMode>[];
  selectedID: string;
}

export default function LeftPaneSelector<TMode extends string>(
  props: Props<TMode>,
) {
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

  const selectedOption = props.options.find((o) => o.mode === props.selectedID);
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
              key={option.mode}
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
