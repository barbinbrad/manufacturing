import * as React from 'react';
import { Outlet } from 'react-router-dom';

export type Props = {};

const Explorer = (props: Props) => {
  return (
    <Outlet />
  )
};

export default Explorer;