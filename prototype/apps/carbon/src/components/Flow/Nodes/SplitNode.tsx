import * as React from 'react';
import { Handle, Position } from 'react-flow-renderer';
import { Box, Flex } from 'ui';
import Node from './Node';
import Toggle from '../Inputs/Toggle';

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

  const [splitEvenly, setSplitEvenly] = React.useState(true);

  const toggleSplitEvenly = () => {
    setSplitEvenly(x => !x);
  };

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
        <Flex alignItems="center">
          <Box width="100%">
            <Toggle onToggle={toggleSplitEvenly} isToggled={splitEvenly} text="Split Evenly" />
          </Box>
        </Flex>
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
