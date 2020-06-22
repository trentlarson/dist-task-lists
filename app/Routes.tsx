/* eslint react/jsx-props-no-spreading: off */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './constants/routes.json';
import App from './containers/App';
import HomePage from './containers/HomePage';

// Lazily load routes and code split with webpacck
const LazyCounterPage = React.lazy(() =>
  import(/* webpackChunkName: "CounterPage" */ './containers/CounterPage')
);

const LazySettingsPage = React.lazy(() =>
  import(/* webpackChunkName: "SettingsPage" */ './containers/SettingsPage')
);

const LazyUnicornPage = React.lazy(() =>
  import(/* webpackChunkName: "UnicornPage" */ './containers/UnicornPage')
);

const CounterPage = (props: Record<string, any>) => (
  <React.Suspense fallback={<h1>Loading...</h1>}>
    <LazyCounterPage {...props} />
  </React.Suspense>
);

const SettingsPage = (props: Record<string, any>) => (
  <React.Suspense fallback={<h1>Loading...</h1>}>
    <LazySettingsPage {...props} />
  </React.Suspense>
);

const UnicornPage = (props: Record<string, any>) => (
  <React.Suspense fallback={<h1>Loading...</h1>}>
    <LazyUnicornPage {...props} />
  </React.Suspense>
);

export default function Routes() {
  return (
    <App>
      <Switch>
        <Route path={routes.COUNTER} component={CounterPage} />
        <Route path={routes.HOME} component={HomePage} />
        <Route path={routes.SETTINGS} component={SettingsPage} />
        <Route path={routes.UNICORN} component={UnicornPage} />
      </Switch>
    </App>
  );
}
