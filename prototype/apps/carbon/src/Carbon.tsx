import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import CatchError from './components/CatchError';
import AppLauncher from './AppLauncher';
import Base from './Base';
import Explorer from './Explorer';
import Module from './Module';

export type Props = {};

const Carbon: React.FC<Props> = props => {
  return (
    <CatchError>
      <Routes>
        <Route path="/" element={<Base />}>
          <Route index element={<AppLauncher />} />
          <Route path="module" element={<Explorer />}>
            <Route path=":moduleId" element={<Module />} />
            {/* <Route path="new" element={<NewModule />} />
            <Route index element={<ModuleExplorer />} /> */}
          </Route>
        </Route>
      </Routes>
    </CatchError>
  )
};

export default Carbon;