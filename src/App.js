import React from 'react';
import styled from 'styled-components';
import { ColumnLayout, Cart, Icon } from 'components';
import { Filter } from 'features/Filter';

const Layout = styled.main`
  width: 820px;
  margin: 0 auto;
`;

const LogoWrap = styled.div`
  display: flex;
  justify-content: center;
  margin: 45px auto 60px;

  > svg {
    border-radius: 50%;
    box-shadow: 0 8px 11px 0 rgba(55, 104, 142, 0.25);
  }
`;

export const App = () => (
  <Layout>
    <LogoWrap>
      <Icon name="logo" size="60" />
    </LogoWrap>
    <ColumnLayout
      sidebar={
        <Cart>
          <Filter />
        </Cart>
      }
      content={<Cart withHover>321</Cart>}
    />
  </Layout>
);
