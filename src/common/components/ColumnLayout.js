import React from 'react';
import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Sidebar = styled.section`
  width: 232px;
`;

const Content = styled.section`
  width: 566px;
`;

export const ColumnLayout = ({ sidebar, content }) => (
  <Layout>
    <Sidebar>{sidebar}</Sidebar>
    <Content>{content}</Content>
  </Layout>
);
