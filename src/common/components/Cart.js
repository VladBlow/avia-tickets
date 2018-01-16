import styled from 'styled-components';

export const Cart = styled.div`
  background: #fff;
  box-shadow: 0 1px 4px 0 rgba(91, 137, 164, 0.25);
  border-radius: 5px;

  ${({ withHover = false }) =>
    withHover &&
    `
    &:hover {
      box-shadow: 0 5px 25px 0 rgba(91, 137, 164, 0.1);
    }
  `};
`;
