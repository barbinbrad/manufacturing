import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Flex, Indicator } from 'ui';
import useAppLauncher from './useAppLauncher';

export default function Container() {
  const state = useAppLauncher();
  return <AppLauncher {...state} />;
}

export function AppLauncher(props: ReturnType<typeof useAppLauncher>) {
  const navigate = useNavigate();
  React.useEffect(() => {
    navigate(`/module/2`);
  }, [])
  return <></>;
}