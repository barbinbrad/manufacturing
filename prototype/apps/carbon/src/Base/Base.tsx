import * as React from 'react';
import { Outlet } from 'react-router-dom';

const Base = (props: Props) => {
  return (
    <Outlet />
  )
};

export type Props = {};

export default Base;