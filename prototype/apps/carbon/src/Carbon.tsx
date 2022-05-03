import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'ui';
import config from './config';
import CatchError from './components/CatchError';
import AppLauncher from './AppLauncher';
import Base from './components/Base';
import Explorer from './components/Explorer';
import Module from './Module';

export type Props = {};

const Carbon: React.FC<Props> = (props) => {
  return (
    <CatchError>
      <ThemeProvider>
        <Routes>
          <Route path={config.routes.root} element={<Base />}>
            <Route index element={<AppLauncher />} />
            <Route path={config.routes.module} element={<Explorer />}>
              <Route path={config.params.moduleId} element={<Module />} />
              {/* <Route path="new" element={<NewModule />} />
              <Route index element={<ModuleExplorer />} /> */}
            </Route>
          </Route>
        </Routes>
      </ThemeProvider>
    </CatchError>
  )
};

export default Carbon;