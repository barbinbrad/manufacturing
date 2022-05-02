import { Node, Edge } from 'react-flow-renderer';

export type FlowGraph = {
  nodes: Node[],
  edges: Edge[],
  parentId: string | null,
}