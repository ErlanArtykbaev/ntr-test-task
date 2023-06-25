import React, { useState } from 'react';
import cn from 'classnames';
import { NotesIcon } from 'assets/images/NotesIcon';


import { IRowProps } from 'components/Table/types';
import { SubRow } from 'components/Table/SubRow';
import { Cell } from 'components/Table/Cell';

export const Row = ({ data, isSummaryRow }: IRowProps): JSX.Element => {
  const [isDropdownShown, setIsDropdownShown]= useState(false);

  const isSubCategories = !!data?.subCategories?.length;
  const shouldShowSubRow = isSubCategories && isDropdownShown;

  const handleDropdownShow = () => {
    if (!isSubCategories) return;
    setIsDropdownShown(prev => !prev);
  };

  return (
    <>
      <div className="row">
        <div
          onClick={handleDropdownShow}
          className={cn('title', {
            'summary': isSummaryRow
          })}
        >
          {!isSummaryRow && (
            <>
              <NotesIcon className="notes" />
            </>
          )}
          <span>
            {data.name}
          </span>
        </div>
        <div className={cn('cells', { 'summary': isSummaryRow })}>
          {data.reports.map(item => (
            <Cell data={item} key={item.id} />
          ))}
        </div>
      </div>
      {shouldShowSubRow && data.subCategories?.map(item => (
        <SubRow data={item} key={item.id} />
      ))}
    </>
  );
};
