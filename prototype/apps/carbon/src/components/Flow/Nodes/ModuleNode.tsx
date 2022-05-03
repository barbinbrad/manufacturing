import * as React from 'react';
import { Handle, Position } from 'react-flow-renderer';
<<<<<<< HEAD:prototype/apps/carbon/src/components/Flow/Nodes/ModuleNode.tsx
import Node from './Node';
=======
import styled from 'styled-components';
>>>>>>> main:prototype/apps/carbon/src/components/Nodes/ModuleNode.tsx

type Props = {
  data: Data;
  isConnectable: boolean;
};

type Data = {
  title: string;
  moduleId: string;
  parentId: string;
  onKeyDown: () => void;
}

// eslint-disable-next-line react/display-name
export default React.memo(({ data, isConnectable } : Props) => {
  return (
    <>
      <Handle
        type="target"
        position={Position.Left}
        style={{ background: '#555' }}
        onConnect={(params: any) => console.log('handle onConnect', params)}
        isConnectable={isConnectable}
      />
<<<<<<< HEAD:prototype/apps/carbon/src/components/Flow/Nodes/ModuleNode.tsx
      <Node type="module" title="Module" >
        {data.title}
      </Node>
=======
      <Module >
        {data.title}
      </Module>
>>>>>>> main:prototype/apps/carbon/src/components/Nodes/ModuleNode.tsx
      
      <Handle
        type="source"
        position={Position.Right}
        style={{ background: '#555' }}
        isConnectable={isConnectable}
      />
      
    </>
  );
});
<<<<<<< HEAD:prototype/apps/carbon/src/components/Flow/Nodes/ModuleNode.tsx
=======

const Module = styled.div`
  background: #ff0000;
  padding: 1rem;
`
>>>>>>> main:prototype/apps/carbon/src/components/Nodes/ModuleNode.tsx
