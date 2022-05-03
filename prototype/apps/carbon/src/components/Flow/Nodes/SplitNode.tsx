import * as React from 'react';
import { Handle, Position } from 'react-flow-renderer';
import Node from './Node';

type Props = {
  data?: Data;
};

type Data = {
  outputs: number
}

// eslint-disable-next-line react/display-name
export default React.memo(({ data = { outputs: 2} } : Props) => {
  const keys = [...Array(data.outputs + 1).keys()];
  keys.shift();
  const multiplier = 1/(keys.length + 1) * 100;

  return (
    <>
      <Handle
        type="target"
        position={Position.Left}
        style={{ background: '#555' }}
        onConnect={(params: any) => console.log('handle onConnect', params)}
        isConnectable={true}
      />
      <Node type="utility" title={`Split-${data.outputs}`} >
        <div></div>
      </Node>
      
      { keys.map(key => <Handle
        type="source"
        id={`${key}`}
        key={key}
        position={Position.Right}
        style={{ background: '#555', top: `${multiplier * key}%` }}
        isConnectable={true}
      />)}
      
    </>
  );
});
