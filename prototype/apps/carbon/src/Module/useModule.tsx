import * as React from 'react';
import { Node, Edge, Position } from 'react-flow-renderer';
import { useParams } from 'react-router-dom';

type FlowGraph = {
  nodes: Node[],
  edges: Edge[],
}

const dummyData: { [key: string]: FlowGraph; } = {
  '1': {
    nodes: [
      {
        
        id: '0',
        type: 'input',
        data: { label: 'Input' },
        position: { x: 0, y: 50 },
        sourcePosition: Position.Right,
      },
      {
        id: '1',
        type: 'manufacturingNode',
        data: { title: 'G1' },
        style: { border: '1px solid #777', padding: 10, background: 'yellow' },
        position: { x: 400, y: 50 },
      },
      {
        id: '999',
        type: 'output',
        data: { label: 'Output' },
        position: { x: 700, y: 50 },
        targetPosition: Position.Left,
      },
    ],
    edges: [
      {
        id: 'e0-1',
        source: '0',
        target: '1',
        animated: true,
        style: { stroke: '#fff' },
      },
      {
        id: 'e1-999',
        source: '1',
        target: '999',
        animated: true,
        style: { stroke: '#fff' },
      },
    ]
  },
  '2': {
    nodes: [
      {
        
        id: '0',
        type: 'input',
        data: { label: 'Input' },
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
        data: { label: 'Output' },
        position: { x: 700, y: 50 },
        targetPosition: Position.Left,
      },
    ],
    edges: [
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
    ]
  }
}


export default function useModule() {
  const { moduleId } = useParams();
  const [nodes, setNodes] = React.useState<Node[]>([]);
  const [edges, setEdges] = React.useState<Edge[]>([]);

  React.useEffect(() => {
    setNodes(makeNodes(moduleId));
    setEdges(makeEdges(moduleId));   
  }, [moduleId])

  return {
    moduleId,
    nodes,
    edges
  }
}

function makeNodes (id: string | undefined): Node[] {
  if(id && id in dummyData){
    return dummyData[id].nodes;
  }
  return [];
}

function makeEdges (id: string | undefined): Edge[] {
  if(id && id in dummyData){
    return dummyData[id].edges;
  }
  return [];
}