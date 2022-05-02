
import * as React from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, MiniMap, Controls } from 'react-flow-renderer';
import useModule from './useModule';
import ManufacturingNode from '../components/Nodes/ManufacturingNode';

const connectionLineStyle = { stroke: '#fff' };
const snapGrid = [10, 10] as [number, number];
const nodeTypes = {   
  manufacturingNode: ManufacturingNode,
};

export default function Container() {
  const state = useModule();
  return <Module {...state} />;
}

export function Module(props: ReturnType<typeof useModule>) {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  React.useEffect( () => {
    setNodes(props.nodes);
    setEdges(props.edges);
  }, [props.nodes, props.edges]);

  const onConnect = React.useCallback(
    (params) => setEdges((eds) => addEdge({ ...params, animated: true, style: { stroke: '#fff' } }, eds)),
    []
  );
  
  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      style={{ background: '#111111' }}
      nodeTypes={nodeTypes}
      connectionLineStyle={connectionLineStyle}
      snapToGrid={true}
      snapGrid={snapGrid}
      defaultZoom={1.5}
      fitView
      attributionPosition="bottom-left"
    >
      <MiniMap
        nodeStrokeColor={(n: any) => {
          if (n.type === 'input') return '#0041d0';
          if (n.type === 'selectorNode') return '#000000';
          if (n.type === 'output') return '#ff0072';
          return '#000000'
        }}
        nodeColor={'#ffffff'}
      />
      <Controls />
    </ReactFlow>
  );
}