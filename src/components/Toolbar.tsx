import IconButton from './IconButton';
import React from 'react';

import classnames from 'classnames';
import useTheme, { toggleTheme } from '../useTheme';

import './Toolbar.css';

export interface Props {}

export default function Toolbar(props: Props) {
  const [theme, setTheme] = useTheme();

  function onClickDarkMode() {
    setTheme(toggleTheme(theme));
  }

  function onClickSidebarLeft() {}

  return (
    <div className={classnames('Toolbar-Root', 'Theme-Light')}>
      <div className="Toolbar-ContentLeft">
        <IconButton
          dim={true}
          iconName="SidebarLeft"
          onClick={onClickSidebarLeft}
        />
      </div>
      <div className="Toolbar-ContentRight">
        <IconButton dim={true} iconName="DarkMode" onClick={onClickDarkMode} />
      </div>
    </div>
  );
}
