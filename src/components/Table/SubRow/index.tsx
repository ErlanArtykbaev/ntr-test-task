import React from 'react';
import { NotesIcon } from 'assets/images/NotesIcon';

import { ISubRowProps } from 'components/Table/types';
import { Cell } from 'components/Table/Cell';

export const SubRow = ({ data }: ISubRowProps): JSX.Element => (
  <div className="row sub">
    <div className="title sub">
      <NotesIcon className="notes" />
      <span>
        {data.name}
      </span>
    </div>
    <div className="cells sub">
      {data.reports.map(item => (
        <Cell data={item} key={item.id} />
      ))}
    </div>
  </div>
);
