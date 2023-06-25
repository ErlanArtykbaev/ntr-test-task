import React, { FC } from 'react';

import Header from './Header';

const Layout: FC = (props): JSX.Element => (
  <div className="layout">
    <div className="content">
      <Header />
      {props.children}
    </div>
  </div>
);

export default Layout;
