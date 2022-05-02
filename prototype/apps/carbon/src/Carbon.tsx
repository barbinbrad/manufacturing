import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import CatchError from './components/CatchError';
import AppLauncher from './AppLauncher';
import Base from './Base';
<<<<<<< HEAD
import Explorer from './Explorer';
import Module from './Module';

export type Props = {};

=======
import Flow from './Flow';
import Module from './Module';

>>>>>>> main
const Carbon: React.FC<Props> = props => {
  return (
    <CatchError>
      <Routes>
        <Route path="/" element={<Base />}>
          <Route index element={<AppLauncher />} />
<<<<<<< HEAD
          <Route path="module" element={<Explorer />}>
=======
          <Route path="module" element={<Flow />}>
>>>>>>> main
            <Route path=":moduleId" element={<Module />} />
            {/* <Route path="new" element={<NewModule />} />
            <Route index element={<ModuleExplorer />} /> */}
          </Route>
        </Route>
      </Routes>
    </CatchError>
  )
};

<<<<<<< HEAD
=======
export type Props = {
  
}

>>>>>>> main
export default Carbon;