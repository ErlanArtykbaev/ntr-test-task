import React from 'react';

import { IMonthCellProps } from 'components/Table/types';

export const MonthCell = ({ month }: IMonthCellProps): JSX.Element => (
  <div className="month_cell">
    <span className="actual">Actual</span>
    <span className="month_text">{month}</span>
  </div>
);
