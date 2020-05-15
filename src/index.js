import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import SearchTable from "./CovidMap/SearchTable";

ReactDOM.render(
    <div className="container">
        <h1>Covid-19 Map</h1>
        <SearchTable />
    </div>,
  document.getElementById('root')
);

serviceWorker.unregister();
