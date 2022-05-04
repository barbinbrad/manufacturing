import * as React from 'react';
import { Handle, Position } from 'react-flow-renderer';
import { Box, Flex } from 'ui';
import Toggle from '../Inputs/Toggle';
import Node from './Node';

type Props = {
  data: Data;
};

type Data = {
  title: string;
  onChange: () => void;
}

// eslint-disable-next-line react/display-name
export default React.memo(({ data } : Props) => {
  const [toggled, setToggled] = React.useState(false);

  const handleToggle = () => {
    setToggled(t => !t);
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

      <Node type="process" title={data.title}>
        <Flex alignItems="center">
          <Box width="100%">
            <Toggle onToggle={handleToggle} isToggled={toggled} text="Alert" />
          </Box>
        </Flex>
      </Node>
      
      <Handle
        type="source"
        position={Position.Right}
        style={{ background: '#555' }}
        isConnectable={true}
      />
      
    </>
  );
});