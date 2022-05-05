import { Position } from 'react-flow-renderer';
import { FlowGraph } from './types';

const data: { [key: string]: FlowGraph; } = {
  '1': {
    nodes: [
      {
        
        id: '0',
        type: 'input',
        data: { label: 'Order' },
        position: { x: 0, y: 50 },
        sourcePosition: Position.Right,
      },
      {
        id: '2',
        type: 'manufacturedPart',
        data: { title: 'Peanut Butter & Jelly' },
        position: { x: 330, y: 50 },
      },
      {
        id: '999',
        type: 'output',
        data: { label: 'Product' },
        position: { x: 700, y: 50 },
        targetPosition: Position.Left,
      },
    ],
    edges: [
      {
        id: 'e0-1',
        source: '0',
        target: '2',
        animated: true,
        style: { stroke: '#fff' },
      },
      {
        id: 'e1-999',
        source: '2',
        target: '999',
        animated: true,
        style: { stroke: '#fff' },
      },
    ],
    parentId: null,
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
        id: '3',
        type: 'module',
        data: { title: 'Sandwich Setup' },
        position: { x: 200, y: 0 },
      },
      {
        id: '4',
        type: 'split',
        data: { title: 'Split', outputs: 2 },
        position: { x: 500, y: 0 },
      },
      {
        id: '5',
        type: 'process',
        data: { operation: 'Spread' },
        position: { x: 770, y: -100 },
      },
      {
        id: '6',
        type: 'process',
        data: { operation: 'Spread' },
        position: { x: 770, y: 100 },
      },
      {
        id: '7',
        type: 'module',
        data: { title: 'Sandwich Assembly' },
        position: { x: 1070, y: 0 },
      },
      {
        id: '999',
        type: 'output',
        data: { label: 'Output' },
        position: { x: 1350, y: 50 },
        targetPosition: Position.Left,
      },
      {
        id: '8',
        type: 'script',
        data: { params: { addSugar: true }, code: 'async function f(params) {\n  const { Jelly } = params;\n  return (Jelly === \"Peach\") \n    ? 1.5 \n    : 0.5;\n}' },
        position: { x: 320, y: 150 },
      },
    ],
    edges: [
      {
        id: 'e0-3',
        source: '0',
        target: '3',
        animated: true,
        style: { stroke: '#fff' },
      },
      {
        id: 'e3-4',
        source: '3',
        target: '4',
        animated: true,
        style: { stroke: '#fff' },
      },
      {
        id: 'e4-5-1',
        source: '4',
        target: '5',
        sourceHandle: '1',
        animated: true,
        style: { stroke: '#fff' },
      },
      {
        id: 'e4-6-1',
        source: '4',
        target: '6',
        sourceHandle: '2',
        animated: true,
        style: { stroke: '#fff' },
      },
      {
        id: 'e5-7',
        source: '5',
        target: '7',
        animated: true,
        style: { stroke: '#fff' },
      },
      {
        id: 'e6-7',
        source: '6',
        target: '7',
        animated: true,
        style: { stroke: '#fff' },
      },
      {
        id: 'e7-999',
        source: '7',
        target: '999',
        animated: true,
        style: { stroke: '#fff' },
      },
    ],
    parentId: '1',
  }
}

export default data;