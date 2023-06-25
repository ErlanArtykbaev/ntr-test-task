import React from 'react';

import { Row } from 'components/Table/Row';
import { Header } from 'components/Table/Header';

import { ITableProps } from './types';

export const Table = ({ data } : ITableProps): JSX.Element => (
  <div className="table">
    <Header />
    <div className="content">
      {data?.map(item => (
        <Row data={item} key={item.id} />
      ))}
    </div>
  </div>
);
