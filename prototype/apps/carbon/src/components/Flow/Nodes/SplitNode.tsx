import * as React from 'react';
import { Handle, Position } from 'react-flow-renderer';
import Node from './Node';

type Props = {
  isConnectable: boolean;
};

// eslint-disable-next-line react/display-name
export default React.memo(({ isConnectable } : Props) => {
  return (
    <>
      <Handle
        type="target"
        position={Position.Left}
        style={{ background: '#555' }}
        onConnect={(params: any) => console.log('handle onConnect', params)}
        isConnectable={isConnectable}
      />
      <Node type="utility" title="Split" >
        <div></div>
      </Node>
      
      <Handle
        type="source"
        id='1'
        position={Position.Right}
        style={{ background: '#555', top: '25%' }}
        isConnectable={isConnectable}
      />

      <Handle
        type="source"
        id='2'
        position={Position.Right}
        style={{ background: '#555', top: '75%' }}
        isConnectable={isConnectable}
      />
      
    </>
  );
});
