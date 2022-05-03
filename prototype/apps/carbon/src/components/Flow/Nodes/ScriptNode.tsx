import * as React from 'react';
import { Handle, Position } from 'react-flow-renderer';
import { ReactCodeJar } from "react-codejar";
import Prism from 'prismjs';
import { theme } from 'ui';
import Node from './Node';

type Props = {
  data: Data;
};

type Data = {
  params: { [key: string]: any };
  code?: string;
}

const highlight = (editor: HTMLElement) => {
  let code = editor.textContent;
  if (typeof code == 'string') {
    editor.innerHTML = Prism.highlight(code, Prism.languages.javascript, 'javascript');;
  } 
};

// eslint-disable-next-line react/display-name
export default React.memo(({ data } : Props) => {
  const [code, setCode] = React.useState(data.code || 'async function f(params) {\n  // your code here\n  return 0\n}');

  return (
    <>     
      <Node type="script" title="JavaScript" >
        <ReactCodeJar
          code={code}
          style={{
            fontFamily: theme.fonts.mono,
            background: 'rgba(0,0,0,0.8)', 
            color: '#fff', 
            margin: '-8px', 
            padding: '8px', 
            minWidth: 320}}
          options={{
            tab: ' '.repeat(2)
          }}
          onUpdate={setCode} 
          highlight={highlight} 
        />
      </Node>

      <Handle
        type="source"
        position={Position.Right}
        style={{ background: '#555' }}
        isConnectable={true}
      />
      
    </>
  );
});
