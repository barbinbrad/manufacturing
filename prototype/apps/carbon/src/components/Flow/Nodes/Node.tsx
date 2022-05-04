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
  border: string;
  hasPadding: boolean;
  footer: string;
}

const themeMap: {[key: string]: NodeTheme} = {
  'module': {
    background: theme.colors.accent.purple,
    color: theme.colors.text.onDark,
    border: theme.colors.grey[600],
    hasPadding: true,
    footer: 'Module',
  },
  'process': {
    background: theme.colors.accent.green,
    color: theme.colors.text.onLight,
    border: theme.colors.grey[600],
    hasPadding: true,
    footer: 'Process',
  },
  'utility' : {
    background: theme.colors.accent.pink,
    color: theme.colors.text.onLight,
    border: theme.colors.grey[600],
    hasPadding: true,
    footer: 'Utility',
  },
  'script' : {
    background: theme.colors.accent.yellow,
    color: theme.colors.text.onLight,
    border: theme.colors.grey[600],
    hasPadding: false,
    footer: 'Script'
  },
  'default': {
    background: theme.colors.light,
    color: theme.colors.text.onLight,
    border: theme.colors.grey[600],
    hasPadding: true,
    footer: 'Undefined',
  },
  
};

export const NodeContext = React.createContext<NodeTheme>(themeMap['default']);

const Node = (props: Props) => { 
  const [config] = React.useState(themeMap[props.type])
  return (
    <NodeContext.Provider value={config} >
      <Element {...props} />
    </NodeContext.Provider>
  );
};

export default Node;

const Element = ({title, children}: Props) => {
  const config = React.useContext(NodeContext);

  return (
    <Wrapper config={config}>
      <Header>
        <Title>{title}</Title>
        <Action>
          <DotsVerticalIcon width={16} height={16} color={config.color}/>
        </Action>
      </Header>
      <Body config={config}>
        { children }
      </Body>
      <Footer>{config.footer}</Footer>
    </Wrapper>
  )
};

type WrapperProps = {
  config: NodeTheme;
}

const Wrapper = styled.div<WrapperProps>`
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  padding: 0px;
  position: relative;
  border: 1px solid ${props => props.config.border};
  background: ${props => props.config.background};
  color: ${props => props.config.color};
  border-radius: 0.375rem;
`;

const Header = styled.div`
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  padding: 8px;
  display: flex;
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

type BodyProps = {
  config: NodeTheme;
}

const Body = styled.div<BodyProps>`
  box-sizing: border-box;
  margin: 0px;
  border-top: 1px solid ${props => props.config.border};
  padding: ${props => props.config.hasPadding ? '8px' : '0px'};
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