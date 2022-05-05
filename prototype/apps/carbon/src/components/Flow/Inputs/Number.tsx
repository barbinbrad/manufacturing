import * as React from 'react';
import styled from 'styled-components';
import { SearchIcon } from '@heroicons/react/solid';
import { NodeContext, NodeTheme } from '../Nodes/Node';

type Props = {
  placeholder: string;
  value: string;
  onValueChange: (x: string) => void;
}

export default function SearchResult({
  placeholder,
  value,
  onValueChange
}: Props) {
  const nodeTheme = React.useContext(NodeContext);

  return (
    <InputWrapper>
      <Input type="number" value={value} placeholder={placeholder} theme={nodeTheme} onChange={(e) => onValueChange(e.target.value)}/>
    </InputWrapper>
  )
}

const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 8px;
`;

type InputProps = {
  theme: NodeTheme;
}

const Input = styled.input<InputProps>`
  cursor:pointer;
  appearance: none;
  background: transparent;
  border: 1px solid ${props => props.theme.color};
  color: ${props => props.theme.color};
  border-radius: 3px;
  box-sizing: border-box;
  display: block;
  height: 30px;
  font-size: 14px;
  padding: 0 8px;
  outline: none;
  width: 100%;
  ::-ms-clear {
    display: none;
  }
  ::placeholder {
    opacity: 0.7;
  }
`;

const StyledSearchIcon = styled(SearchIcon)`
  height: 20px;
  width: 20px;
  position: absolute;
  right: 4px;
  top: 4px;
`;
