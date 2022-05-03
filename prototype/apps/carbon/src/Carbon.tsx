import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'ui';
import config from './config';
import CatchError from './components/CatchError';
import AppLauncher from './AppLauncher';
<<<<<<< HEAD
import Base from './components/Base';
import Explorer from './components/Explorer';
=======
import Base from './Base';
import Explorer from './Explorer';
>>>>>>> main
import Module from './Module';

export type Props = {};

<<<<<<< HEAD
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
=======
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
>>>>>>> main
          </Route>
        </Routes>
      </ThemeProvider>
    </CatchError>
  )
};

export default Carbon;