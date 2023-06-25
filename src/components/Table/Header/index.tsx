import React from 'react';

import { MonthCell } from 'components/Table/Header/MonthCell';

import { getTableHeaderMonths } from 'utils/tableMonths';

export const Header = (): JSX.Element => (
  <div className="header">
    <div className="title">
      <span>Financial Report</span>

    </div>
    <div className="months">
      {getTableHeaderMonths().map(item => (
        <MonthCell month={item} key={item} />
      ))}
    </div>
  </div>
);
