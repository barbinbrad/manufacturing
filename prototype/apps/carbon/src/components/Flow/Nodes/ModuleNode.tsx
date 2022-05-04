import * as React from 'react';
import { Handle, Position } from 'react-flow-renderer';
import { Box, Flex } from 'ui';
import SearchResult from '../Inputs/SearchResult';
import Node from './Node';

type Props = {
  data: Data;
};

export type Data = {
  title: string;
  moduleId: string;
  parentId: string;
  sync: boolean;
}

// eslint-disable-next-line react/display-name
export default React.memo(({ data } : Props) => {
  // const nodeTheme = React.useContext(NodeContext);
  const [sync, setSync] = React.useState(false);

  const toggleSync = () => {
    setSync(x => !x);
  };

  const handleModuleChange = (type: string) => {
    console.log(`Received new type: ${type}`);
  };

  return (
    <>
      
      <Node type="module" title="Module" >
        <Flex alignItems="center">
          <Box width="100%">
            <SearchResult 
              queryName="Modules" 
              displayField="name"
              placeholder="Modules" 
              onValueChange={handleModuleChange}
              value={data.title} 
            />           
          </Box>
        </Flex>
      </Node>

      <Handle
        type="target"
        position={Position.Left}
        style={{ background: '#555' }}
        isConnectable={true}
      />

      <Handle
        type="source"
        position={Position.Right}
        style={{ background: '#555' }}
        isConnectable={true}
      />
      
    </>
  );
});
