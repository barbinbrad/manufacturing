import * as React from 'react';
import { Handle, Position } from 'react-flow-renderer';
import Node from './Node';

type Props = {
  isConnectable: boolean,
  data?: Data,
};

type Data = {
  outputs: number
}

// eslint-disable-next-line react/display-name
export default React.memo(({ data = { outputs: 2}, isConnectable } : Props) => {
  const keys = [...Array(data.outputs).keys()];
  console.log(keys);
  const multiplier = 1/(keys.length + 1) * 100;

  return (
    <>
      <Handle
        type="target"
        position={Position.Left}
        style={{ background: '#555' }}
        onConnect={(params: any) => console.log('handle onConnect', params)}
        isConnectable={isConnectable}
      />
      <Node type="utility" title={`Split-${data.outputs}`} >
        <div></div>
      </Node>
      
      { keys.map(key => <Handle
        type="source"
        id={`${key+1}`}
        key={key}
        position={Position.Right}
        style={{ background: '#555', top: `${multiplier * (key + 1)}%` }}
        isConnectable={isConnectable}
      />)}
      
    </>
  );
});
