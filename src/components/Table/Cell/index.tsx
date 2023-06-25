import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';

import { ICellProps } from 'components/Table/types';

import { getDataDetailRequest } from 'store/data/actions';
import { makeSelectSelectedCellId } from 'store/data/selectors';

export const Cell = ({ data }: ICellProps): JSX.Element => {
  const selectedCellId = useSelector(makeSelectSelectedCellId);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getDataDetailRequest({ id: data.id }));
  };

  return (
    <div
      onClick={handleClick}
      className={cn('cell', {
        ['selected']: selectedCellId === data.id
      })}
    >
      {data.value}
    </div>
  );
};
