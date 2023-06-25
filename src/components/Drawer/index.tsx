import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';

import { makeSelectDataDetailInfo, makeSelectIsDrawerShown } from 'store/data/selectors';
import { setDrawer, setSelectedCell } from 'store/data/actions';

export const Drawer = (): JSX.Element => {
  const isDrawerShown = useSelector(makeSelectIsDrawerShown);
  const detailInfo = useSelector(makeSelectDataDetailInfo);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setDrawer(false));
    dispatch(setSelectedCell(null));
  };

  return (
    <div
      className={cn('drawer', {
        'shown': isDrawerShown
      })}
    >
      <div className="drawer_header">
        <div className="titles">
          <span className="title">
            Office Supplies & Software
          </span>
          <span onClick={handleClose} className="close_drawer">x</span>
        </div>
        <div className="short_infos">
          <div className="total_transactions">{detailInfo?.transactionsList.length || 0} Transactions</div>
          <div className="date">{detailInfo?.date}</div>
        </div>
        <div className="search_wrapper">
          <input className="search" type="text" placeholder="Search"/>
        </div>
      </div>
      <div className="content">
        <div className="content_header">
          <span className="date">{detailInfo?.date}</span>
          <span className="total_value">{detailInfo?.totalValue}</span>
        </div>
        <div className="reports">
          {detailInfo?.transactionsList.map(item => (
            <div key={item.id} className="report">
              <div className="titles">
                <div className="date">{item.date}</div>
                <div className="company">{item.companyName}</div>
                <div className="transaction">{item.transactionType}</div>
              </div>
              <div className="value">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
