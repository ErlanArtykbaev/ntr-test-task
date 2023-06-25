import React from 'react';
import { SettingsIcon } from 'assets/images/SettingsIcon';

const Header = (): JSX.Element => (
  <div className="header">
    <div className="title">Main</div>
    <div className="settings">
      <SettingsIcon />
    </div>
    <div className="search">
      <input className="input" placeholder="Search" type="text" />
    </div>
  </div>
);

export default Header;
