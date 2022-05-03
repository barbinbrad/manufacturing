import React from 'react';
import { getBezierPath, getEdgeCenter, Position } from 'react-flow-renderer';

const foreignObjectSize = 40;

export type Props = {
  id: string,
  sourceX: number,
  sourceY: number,
  targetX: number,
  targetY: number,
  sourcePosition?: Position,
  targetPosition?: Position,
  style?: any,
  markerEnd?: string,
}

const onEdgeClick = (event: React.MouseEvent, id: string) => {
  event.stopPropagation();
  alert(`remove ${id}`);
};

export default function CustomEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
}: Props) {
  const edgePath = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });
  const [edgeCenterX, edgeCenterY] = getEdgeCenter({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  return (
    <>
      <path
        id={id}
        style={style}
        className="react-flow__edge-path"
        d={edgePath}
        markerEnd={markerEnd}
      />
      <foreignObject
        width={foreignObjectSize}
        height={foreignObjectSize}
        x={edgeCenterX - foreignObjectSize / 2}
        y={edgeCenterY - foreignObjectSize / 2}
        className="edgebutton-foreignobject"
        requiredExtensions="http://www.w3.org/1999/xhtml"
      >
        <body>
          <button className="edgebutton" onClick={(event) => onEdgeClick(event, id)}>
            ×
          </button>
        </body>
      </foreignObject>
    </>
  );
}