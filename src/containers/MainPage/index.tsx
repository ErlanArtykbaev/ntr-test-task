import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Table } from 'components/Table';
import { Drawer } from 'components/Drawer';

import { makeSelectDataInfo } from 'store/data/selectors';
import { getDataRequest } from 'store/data/actions';

const MainPage = (): JSX.Element => {
  const data = useSelector(makeSelectDataInfo);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataRequest());
  }, [dispatch]);

  return (
    <div className="main">
      <Table data={data} />
      <Drawer />
    </div>
  );
};

export default MainPage;
