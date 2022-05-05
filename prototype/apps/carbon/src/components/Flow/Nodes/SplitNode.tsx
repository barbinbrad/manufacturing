import * as React from 'react';
import { Handle, Position } from 'react-flow-renderer';
import { Box, Flex } from 'ui';
import Node from './Node';
import Number from '../Inputs/Number';
import Toggle from '../Inputs/Toggle';

type Props = {
  data?: Data;
};

export type Data = {
  outputs: number
}

// eslint-disable-next-line react/display-name
export default React.memo(({ data = { outputs: 2} } : Props) => {
  
  const [outputs, setOutputs] = React.useState(data.outputs)
  const [splitEvenly, setSplitEvenly] = React.useState(true);

  const keys = [...Array(outputs + 1).keys()];
  keys.shift();
  const multiplier = 1/(keys.length + 1) * 100;

  const toggleSplitEvenly = () => {
    setSplitEvenly(x => !x);
  };

  const handleSplitWaysChange = (value: string) => {
    const newValue = Math.floor(parseInt(value));
    if (!isNaN(newValue) && newValue > 1 && newValue < 8) {
      setOutputs(newValue);
    }
  }

  return (
    <>
      <Node type="utility" title={`Split`} >
        <Flex alignItems="center">
          <Box width="100%">
            <Number placeholder="Quantity" value={`${outputs}`} onValueChange={handleSplitWaysChange}/>       
            <Toggle onToggle={toggleSplitEvenly} isToggled={splitEvenly} text="Split Evenly" />
          </Box>
        </Flex>
      </Node>

      <Handle
        type="target"
        position={Position.Left}
        style={{ background: '#555', top: '50%' }}
        isConnectable={true}
      />
      
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
