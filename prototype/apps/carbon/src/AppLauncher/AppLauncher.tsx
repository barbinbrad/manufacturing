import React from 'react';
import { Flex, Indicator } from 'ui';
import useAppLauncher from './useAppLauncher';

export default function Container() {
  const state = useAppLauncher();
  return <AppLauncher {...state} />;
}

export function AppLauncher(props: ReturnType<typeof useAppLauncher>) {
  return (
    <Flex height="180px" justifyContent="center" alignItems="center" flex="1">
      <Indicator />
    </Flex>
  );
}