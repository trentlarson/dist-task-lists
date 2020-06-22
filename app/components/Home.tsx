import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import routes from '../constants/routes.json';
import { reloadSettings, selectSettings } from '../features/settings/settingsSlice';
import styles from './Home.css';

export default function Home(): JSX.Element {
  const settings = useSelector(selectSettings);
  return (
    <div className={styles.container} data-tid="container">
      <h2>Home</h2>
      <Link to={routes.COUNTER}>to Counter</Link>
      <br/>
      <Link to={routes.SETTINGS}>to Settings</Link>
      <br/>
      <Link to={routes.UNICORN}>to Unicorn</Link>
      <ul>
        {settings.sources && settings.sources.map((uriSource) => 
          <li key={uriSource.id}>
            {uriSource.name}
          </li>
        )}
      </ul>
    </div>
  );
}
