import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import TotalConfirmed from "./CovidMap/TotalConfirmed";
import CountryData from "./CovidMap/CountryData";
import Grafic from "./CovidMap/Grafic";
import SearchCountry from "./CovidMap/SearchCountry";
import SearchTable from "./CovidMap/SearchTable";

ReactDOM.render(
    <div className="container">
        <h1>Covid-19 Map</h1>
        <SearchTable />
        {/*<SearchCountry />*/}
        {/*<CountryData />*/}
        {/*<TotalConfirmed />*/}
        {/*<Grafic />*/}
    </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
