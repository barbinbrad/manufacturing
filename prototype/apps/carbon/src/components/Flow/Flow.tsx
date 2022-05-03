import * as React from 'react';
import { Outlet } from 'react-router-dom';

const Flow = (props: Props) => {
  return (
    <Outlet />
  )
};

export type Props = {};

export default Flow;