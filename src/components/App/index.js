/**
 * Npm import
 */
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropsTypes from 'prop-types';

/**
 * Local import
 */
import './app.scss';
import Login from 'src/containers/Login';
import NotFound from 'src/components/NotFound';
import Welcome from 'src/containers/Welcome';

/**
 * Code
 */
const App = ({ redirect }) => {
    return (
      <div id="app">
        { redirect && <Redirect to="/Welcome" />}
        { !redirect && <Redirect to="/" />}
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/Welcome" component={Welcome} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  };
  App.propTypes = {
    redirect: PropsTypes.bool.isRequired,
  };
/**
 * Export
 */
export default App;
