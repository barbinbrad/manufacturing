
import * as React from 'react';
import ReactFlow, { useNodesState, useEdgesState, useKeyPress, addEdge, MiniMap, Node, Controls } from 'react-flow-renderer';
import { useNavigate } from 'react-router-dom';
import useModule from './useModule';
import ModuleNode from '../components/Flow/Nodes/ModuleNode';
import ProcessNode from '../components/Flow/Nodes/ProcessNode';
import DeleteEdge from '../components/Flow/Edges/DeleteEdge';

const connectionLineStyle = { stroke: '#fff' };
const snapGrid = [10, 10] as [number, number];
const nodeTypes = {   
  module: ModuleNode,
  process: ProcessNode,
};

const edgeTypes = {
  deleteEdge: DeleteEdge,
}

export default function Container() {
  const state = useModule();
  return <Module {...state} />;
}

export function Module(props: ReturnType<typeof useModule>) {
  const {
    graph
  } = props;

  
  const navigate = useNavigate();
  const spacePressed = useKeyPress('Space');
  
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  React.useEffect(() => {
    setNodes(graph.nodes);
    setEdges(graph.edges);
  }, [graph]);

  React.useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      switch(event.key) {
        case 'Escape':
          if (graph.parentId) {
            navigate(`/module/${graph.parentId}`);
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [graph.parentId])

  const handleConnect = React.useCallback(
    (params) => setEdges((eds) => addEdge({ ...params, animated: true, style: { stroke: '#fff' }, type: 'deleteEdge' }, eds)),
    []
  );

  const handleClick = (event: React.MouseEvent, node: Node<any>) => {
    if (node.type === 'module' && spacePressed) {
      navigate(`/module/${node.data.moduleId}`);
    }
  };
  
  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={handleConnect}
      onNodeClick={handleClick}
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
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