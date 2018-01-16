import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 160px;
  padding: 6px 0;
  background: #ff6d00;
  box-shadow: 0 1px 0 0 #d64d08, 0 2px 1px 0 rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  border: none;
  outline: none;
  color: #fff;
  line-height: 1.4;
  cursor: pointer;

  :active {
    background: #ff8124;
    box-shadow: 0 1px 0 0 #f7661d, 0 1px 5px 0 rgba(0, 0, 0, 0.25);
  }
`;

export const Button = props => <StyledButton>{props.children}</StyledButton>;
