import * as React from 'react';
import { DotsVerticalIcon } from '@heroicons/react/outline'
import styled from 'styled-components';

export type Props = {
  type: 'module' | 'process' | 'utility' | 'script';
  title: string;
  children: React.ReactNode;
}

export type Config = {
  background: string;
  color: string;
  footer: string;
}

const config: {[key: string]: Config} = {
  'module': {
    background: '#651FFF',
    color: '#ffffff',
    footer: 'Module',
  },
  'process': {
    background: '#3ef794',
    color: '#111111',
    footer: 'Process',
  },
  'utility' : {
    background: '#ff0072',
    color: '#111111',
    footer: 'Utility',
  },
  'script' : {
    background: '#ffc400',
    color: '#111111',
    footer: 'Script'
  },
};

const Node = (props: Props) => { 
  return (
    <Wrapper>
      <Element {...props} />
    </Wrapper>
  );
};

export default Node;

const Wrapper = styled.div`
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  padding: 0px;
  position: relative;
  border: ${props => props.theme.borders[1] + props.theme.colors.grey[600]};
  border-radius: 4px;
`;

const Element = ({type, title, children}: Props) => {
  const cfg = React.useMemo(() => {
    return config[type];
  }, [type])

  return (
    <div style={{
      background: cfg.background, 
      color: cfg.color,
      borderRadius: '3px'
    }}>
      <Header>
        <Title>{title}</Title>
        <Action>
          <DotsVerticalIcon width={16} height={16} color={cfg.color}/>
        </Action>
      </Header>
      <Body>
        { children }
      </Body>
      <Footer>{cfg.footer}</Footer>
    </div>
  )
}

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