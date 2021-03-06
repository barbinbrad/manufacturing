import * as React from 'react';
import { Handle, Position } from 'react-flow-renderer';
import { Box, Flex } from 'ui';
import Number from '../Inputs/Number';
import SearchResult from '../Inputs/SearchResult';
import Node from './Node';

type Props = {
  data: Data;
};

export type Data = {
  operation: string;
  onChange: () => void;
}

// eslint-disable-next-line react/display-name
export default React.memo(({ data } : Props) => {

  const [time, setTime] = React.useState("0.5");
  
  const handleCellTypeChange = (type: string) => {
    console.log(`Received new type: ${type}`);
  };

  const handleOperationChange = (type: string) => {
    console.log(`Received new type: ${type}`);
  };

  const handleTimeChange = (time: string) => {
    setTime(time);
  };

  return (
    <>

      <Node type="process" title="Process">
        <Flex alignItems="center">
          <Box width="100%">
            <SearchResult 
              queryName="Cell Types" 
              displayField="name"
              placeholder="Cell Type" 
              onValueChange={handleCellTypeChange}
              value="Kitchen" 
            />
            <SearchResult 
              queryName="Cell Operations" 
              displayField="name"
              placeholder="Operation" 
              onValueChange={handleOperationChange}
              value={data.operation} 
            />
            <Number placeholder="Time" value={time} onValueChange={handleTimeChange}/>
          </Box>
        </Flex>
      </Node>

      <Handle
        type="target"
        position={Position.Left}
        style={{ background: '#555' }}
        onConnect={(params: any) => console.log('handle onConnect', params)}
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