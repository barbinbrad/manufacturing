import * as React from 'react';
import { DotsVerticalIcon } from '@heroicons/react/outline'
import styled from 'styled-components';

export type Props = {
  type: 'module' | 'process' | 'utility',
  title: string,
  children: React.ReactNode
}

export type Config = {
  background: string;
  color: string;
}

const config: {[key: string]: Config} = {
  'module': {
    background: '#651FFF',
    color: '#ffffff'
  },
  'process': {
    background: '#3ef794',
    color: '#111111'
  },
  'utility' : {
    background: '#ff0072',
    color: '#111111'
  },
};

const Node = (props: Props) => {
  
  return (
    <Wrapper>
      <Element {...props} />
      <Footer></Footer>
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
  color: ${props => props.theme.colors.text.secondary};
  position: absolute;
  bottom: -8px;
  top: auto;
  left: 0px;
  transform: translateY(100%);
`;