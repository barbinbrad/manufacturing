import * as React from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, MiniMap, Controls, Position } from 'react-flow-renderer';

import ManufacturingNode from './components/ManufacturingNode'

import "./App.css";

const connectionLineStyle = { stroke: '#fff' };
const snapGrid = [10, 10] as [number, number];
const nodeTypes = {   
  manufacturingNode: ManufacturingNode,
};

const CustomNodeFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  React.useEffect( () => {
    setNodes([
      {
        id: '0',
        type: 'input',
        data: { label: 'Order' },
        position: { x: 0, y: 50 },
        sourcePosition: Position.Right,
      },
      {
        id: '1',
        type: 'manufacturingNode',
        data: { title: 'G1' },
        style: { border: '1px solid #777', padding: 10, background: 'yellow' },
        position: { x: 200, y: 50 },
      },
      {
        id: '2',
        type: 'manufacturingNode',
        data: { title: 'G2' },
        style: { border: '1px solid #777', padding: 10, background: 'yellow' },
        position: { x: 300, y: 50 },
      },
      {
        id: '3',
        type: 'manufacturingNode',
        data: { title: 'G3' },
        style: { border: '1px solid #777', padding: 10, background: 'yellow' },
        position: { x: 400, y: 0 },
      },
      {
        id: '4',
        type: 'manufacturingNode',
        data: { title: 'G4' },
        style: { border: '1px solid #777', padding: 10, background: 'yellow' },
        position: { x: 400, y: 100 },
      },
      {
        id: '5',
        type: 'manufacturingNode',
        data: { title: 'G5' },
        style: { border: '1px solid #777', padding: 10, background: 'yellow' },
        position: { x: 500, y: 50 },
      },
      {
        id: '6',
        type: 'manufacturingNode',
        data: { title: 'G6' },
        style: { border: '1px solid #777', padding: 10, background: 'yellow' },
        position: { x: 600, y: 50 },
      },
      {
        id: '999',
        type: 'output',
        data: { label: 'Product' },
        position: { x: 700, y: 50 },
        targetPosition: Position.Left,
      },
      
    ]);

    setEdges([
      {
        id: 'e0-1',
        source: '0',
        target: '1',
        animated: true,
        style: { stroke: '#fff' },
      },
      {
        id: 'e1-2',
        source: '1',
        target: '2',
        animated: true,
        style: { stroke: '#fff' },
      },
      {
        id: 'e2-3',
        source: '2',
        target: '3',
        animated: true,
        style: { stroke: '#fff' },
      },
      {
        id: 'e2-4',
        source: '2',
        target: '4',
        animated: true,
        style: { stroke: '#fff' },
      },
      {
        id: 'e3-5',
        source: '3',
        target: '5',
        animated: true,
        style: { stroke: '#fff' },
      },
      {
        id: 'e4-5',
        source: '4',
        target: '5',
        animated: true,
        style: { stroke: '#fff' },
      },
      {
        id: 'e5-6',
        source: '5',
        target: '6',
        animated: true,
        style: { stroke: '#fff' },
      },
      {
        id: 'e6-999',
        source: '6',
        target: '999',
        animated: true,
        style: { stroke: '#fff' },
      },
    ]);
  }, []);

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
};

export default CustomNodeFlow;
