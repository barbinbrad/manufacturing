import * as React from 'react';
import styled from 'styled-components';

export type Props = {
  type: 'module' | 'process' | 'split',
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
    background: '#ff008c',
    color: '#111111'
  },
};

const Node = (props: Props) => {
  
  return (
    <Wrapper>
      <Theme {...props} />
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
  border: ${props => props.theme.borders[1] + props.theme.colors.dark};
`;

const Theme = ({type, title, children}: Props) => {
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
          <DeleteIcon></DeleteIcon>
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

const DeleteIcon = styled.div`
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  color: ${props => props.theme.colors.text.secondary};
  cursor: pointer;
  opacity: 0.25;
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