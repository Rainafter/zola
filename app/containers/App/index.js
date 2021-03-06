/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import LoginPage from '../LoginPage/Loadable';
import UserPage from '../UserPage/Loadable';
import NotFoundPage from '../NotFoundPage/Loadable';

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="Zola"
        defaultTitle="Zola"
      >
        <meta name="description" content="Zola Registry" />
      </Helmet>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/user" component={UserPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
    </AppWrapper>
  );
}
