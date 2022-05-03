import * as React from 'react';
import styled from 'styled-components';

export type Props = {};

export default function TopBar (props: Props) {
  return (
    <Header>
      <img alt="Logo" src="/logo.png" height={20} width={20}/>
    </Header>
  )
}

const Header = styled.div`
  background: ${props => props.theme.colors.dark};
  border-bottom: 1px solid ${props => props.theme.colors.grey[900]};
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  width: 100%;
  padding: 12px 16px;
`;