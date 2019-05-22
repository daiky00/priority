import React, { Component } from 'react';
import { Grid, Row } from 'react-flexbox-grid';
import history from '../services/history';
import { connect } from 'react-redux';

import { Router, Switch, Route } from 'react-router-dom';

// Pages
import AccessPage from './AccessPage';
import DashboardPage from './DashboardPage';
import NotFoundPage from './NotFoundPage';

const Content = () => {
    return (
      <Grid>
        <Row>
          <Router history={history}>
            <Switch>
              <Route exact path="/" component={AccessPage} />
              <Route exact path="/dashboard/:token" component={DashboardPage} />
              <Route exact path="*" component={NotFoundPage} />
            </Switch>
          </Router>
        </Row>
      </Grid>
    )
}

export default Content;
