import * as React from 'react';
import { Handle, Position } from 'react-flow-renderer';
import styled from 'styled-components';

type Props = {
  data: Data;
  isConnectable: boolean;
};

type Data = {
  title: string;
  onChange: () => void;
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
      <Process >
        {data.title}
      </Process>
      
      <Handle
        type="source"
        position={Position.Right}
        style={{ background: '#555' }}
        isConnectable={isConnectable}
      />
      
    </>
  );
});

const Process = styled.div`
  background: #ffff00;
  padding: 1rem;
`