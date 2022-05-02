import * as React from 'react';
import { Node, Edge } from 'react-flow-renderer';
import { useParams } from 'react-router-dom';
import data from './data';
import { FlowGraph } from './types';


export default function useModule() {
  const { moduleId } = useParams();
  const [graph, setGraph] = React.useState<FlowGraph>({
    nodes: [],
    edges: []
  });

  React.useEffect(() => {
    setGraph({
      nodes: makeNodes(moduleId),
      edges: makeEdges(moduleId)
    }); 
  }, [moduleId])

  return {
    moduleId,
    graph
  }
}

function makeNodes (id: string | undefined): Node[] {
  if(id && id in data){
    return data[id].nodes;
  }
  return [];
}

function makeEdges (id: string | undefined): Edge[] {
  if(id && id in data){
    return data[id].edges;
  }
  return [];
}