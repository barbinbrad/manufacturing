import { Position } from 'react-flow-renderer';
import { FlowGraph } from './types';

const data: { [key: string]: FlowGraph; } = {
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
        type: 'module',
        data: { title: 'M1', moduleId: '2' },
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
        type: 'process',
        data: { title: 'G1' },
        position: { x: 200, y: 50 },
      },
      {
        id: '2',
        type: 'process',
        data: { title: 'G2' },
        position: { x: 300, y: 50 },
      },
      {
        id: '3',
        type: 'process',
        data: { title: 'G3' },
        position: { x: 400, y: 0 },
      },
      {
        id: '4',
        type: 'process',
        data: { title: 'G4' },
        position: { x: 400, y: 100 },
      },
      {
        id: '5',
        type: 'process',
        data: { title: 'G5' },
        position: { x: 500, y: 50 },
      },
      {
        id: '6',
        type: 'process',
        data: { title: 'G6' },
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

export default data;