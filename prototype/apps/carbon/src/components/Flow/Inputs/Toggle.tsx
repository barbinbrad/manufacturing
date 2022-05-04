import React from 'react';
import styled from 'styled-components';
import { Text } from 'ui';

type Props = {
  text: string;
  isToggled: boolean;
  onToggle: () => void;
};

export default function Toggle({ isToggled, onToggle, text }: Props) {
  return ( 
        <ToggleWrapper>
          <StyledWrapper>
            <StyledInput checked={isToggled} onChange={() => onToggle()} />
            <StyledSlider />
          </StyledWrapper>
          <Text>{text}</Text>
        </ToggleWrapper>     
  );
}

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  > * {
    &:first-child {
       margin-right: 10px;
    }
  }
`;

const StyledWrapper = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const StyledSlider = styled.div`
  width: 32px;
  height: 12px;
  border-radius: 12px;
  background: ${props => props.theme.colors.darkness[30]};
  cursor: pointer;
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    width: 16px;
    height: 16px;
    border-radius: 16px;
    background: ${props => props.theme.colors.light};
  }
`;

const StyledInput = styled.input.attrs({ type: 'checkbox' })`
  opacity: 0;
  position: absolute;
  cursor: pointer;
  &:checked + ${StyledSlider} {
    background: ${props => props.theme.colors.darkness[60]};
    &:before {
      transform: translate(16px, -50%);
    }
  }
`;