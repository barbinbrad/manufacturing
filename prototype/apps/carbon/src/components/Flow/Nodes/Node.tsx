import * as React from 'react';
import { DotsVerticalIcon } from '@heroicons/react/outline'
import styled from 'styled-components';
import { theme } from 'ui';

export type Props = {
  type: 'module' | 'process' | 'utility' | 'script';
  title: string;
  children: React.ReactNode;
}

export type NodeTheme = {
  background: string;
  color: string;
  footer: string;
}

const themeMap: {[key: string]: NodeTheme} = {
  'module': {
    background: theme.colors.accent.purple,
    color: theme.colors.text.onDark,
    footer: 'Module',
  },
  'process': {
    background: theme.colors.accent.green,
    color: theme.colors.text.onLight,
    footer: 'Process',
  },
  'utility' : {
    background: theme.colors.accent.pink,
    color: theme.colors.text.onLight,
    footer: 'Utility',
  },
  'script' : {
    background: theme.colors.accent.yellow,
    color: theme.colors.text.onLight,
    footer: 'Script'
  },
  'default': {
    background: theme.colors.light,
    color: theme.colors.text.onLight,
    footer: 'Undefined',
  },
  
};

export const NodeContext = React.createContext<NodeTheme>(themeMap['default']);

const Node = (props: Props) => { 
  const [config] = React.useState(themeMap[props.type])
  return (
    <NodeContext.Provider value={config} >
      <Wrapper>
        <Element {...props} />
      </Wrapper>
    </NodeContext.Provider>
  );
};

export default Node;

const Element = ({title, children}: Props) => {
  const config = React.useContext(NodeContext);

  return (
    <div style={{
      background: config.background, 
      color: config.color,
      borderRadius: '3px'
    }}>
      <Header>
        <Title>{title}</Title>
        <Action>
          <DotsVerticalIcon width={16} height={16} color={config.color}/>
        </Action>
      </Header>
      <Body>
        { children }
      </Body>
      <Footer>{config.footer}</Footer>
    </div>
  )
};

const Wrapper = styled.div`
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  padding: 0px;
  position: relative;
  border: ${props => props.theme.borders[1] + props.theme.colors.grey[600]};
  border-radius: 4px;
`;

const Header = styled.div`
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  padding: 8px;
  display: flex;
  border-bottom: ${props => props.theme.borders[1] + props.theme.colors.grey[600]};
  align-items: center;
  box-pack: justify;
  justify-content: space-between;
`;

const Title = styled.div`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
`;

const Action = styled.div`
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  color: ${props => props.theme.colors.text.primary};
  cursor: pointer;
  opacity: 0.75;
  &:hover {
    opacity: 1.0;
  }
`;

const Body = styled.div`
  box-sizing: border-box;
  margin: 0px;
  padding: 8px;
  min-width: 200px;
`;

const Footer = styled.div`
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  font-size: 11px;
  font-family: ${props => props.theme.fonts.mono};
  color: ${props => props.theme.colors.text.secondary};
  position: absolute;
  bottom: 0px;
  top: auto;
  left: 0px;
  transform: translateY(100%);
`;