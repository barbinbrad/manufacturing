import * as React from 'react';
import { Handle, Position } from 'react-flow-renderer';
import Node from './Node';

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
      <Node type="module" title={data.title} >
        <div></div>
      </Node>
      
      <Handle
        type="source"
        position={Position.Right}
        style={{ background: '#555' }}
        isConnectable={isConnectable}
      />
      
    </>
  );
});
