import * as React from 'react';
import { useParams } from 'react-router-dom';
import data from './data';
import { FlowGraph } from './types';

const emptyGraph = {
  nodes: [],
  edges: [],
  parentId: null,
};

export default function useModule() {
  const { moduleId } = useParams();
  const [graph, setGraph] = React.useState<FlowGraph>(emptyGraph);

  React.useEffect(() => {
    setGraph(getGraph(moduleId)); 
  }, [moduleId])

  return {
    moduleId,
    graph
  }
}

function getGraph (id: string | undefined): FlowGraph {
  if(id && id in data){
    return data[id];
  }
  return emptyGraph;
}