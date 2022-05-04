import * as React from 'react';
import { Handle, Position } from 'react-flow-renderer';
import { Box, Flex } from 'ui';
import Toggle from '../Inputs/Toggle';
import Node, { NodeContext } from './Node';

type Props = {
  data: Data;
};

type Data = {
  title: string;
  moduleId: string;
  parentId: string;
  onKeyDown: () => void;
}

// eslint-disable-next-line react/display-name
export default React.memo(({ data } : Props) => {
  const nodeTheme = React.useContext(NodeContext);
  const [test, setTest] = React.useState(false);

  const toggleTest = () => {
    setTest(x => !x);
  }

  return (
    <>
      <Handle
        type="target"
        position={Position.Left}
        style={{ background: '#555' }}
        onConnect={(params: any) => console.log('handle onConnect', params)}
        isConnectable={true}
      />
      <Node type="module" title={data.title} >
        <Flex alignItems="center">
          <Box width="100%">
            <Toggle onToggle={toggleTest} isToggled={test} text="Test" />
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
