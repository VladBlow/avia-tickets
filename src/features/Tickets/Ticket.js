import React from 'react';
import styled from 'styled-components';
import { Cart, Button } from 'components';

const Wrap = styled(Cart)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  width: 200px;
  padding: 22px 0;
  border-right: 1px solid #eceff1;
  text-align: center;

  > img {
    margin-bottom: 18px;
  }
`;

const Right = styled.div`
  width: 365px;
`;

export const Ticket = () => (
  <Wrap withHover>
    <Left>
      <img
        width="120"
        height="35"
        src="/static/img/turkish-air.png"
        srcSet="/static/img/turkish-air@2x.png"
        alt="Turkish Airlanes"
      />
      <Button>
        Купить <br /> за 21 040 Р
      </Button>
    </Left>
    <Right>2</Right>
  </Wrap>
);
