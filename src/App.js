import React from 'react';
import styled from 'styled-components';
import { ColumnLayout, Icon } from 'components';
import { Filter } from 'features/Filter';
import { Tickets } from 'features/Tickets';

const Layout = styled.main`
  width: 818px;
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
    <ColumnLayout sidebar={<Filter />} content={<Tickets />} />
  </Layout>
);
