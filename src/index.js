import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import * as serviceWorker from './serviceWorker';
import CountryTable from "./CovidMap/Table";
import Grafic from "./CovidMap/Grafic";
import { Container, Row, Col } from 'reactstrap';
import SearchCountry from "./CovidMap/SearchCountry";

import  { Component } from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import AppSevagir from "./CovidMap/sevagir";
import Running from "./CovidMap/Running";

ReactDOM.render(
        <Container className="themed-container" fluid={true}>
            <Row className ="bgColor">
                <Col xs="12"><h1>COVID-19 Dashboard by the Center for Systems Science</h1></Col>
                {/*<Col xs="3"><SearchCountry /></Col>*/}
            </Row>
            <Row>
                <Running />
                {/*<Col xs="7"><CountryTable /></Col>*/}
                {/*<Col xs="5"><Grafic /></Col>*/}
                {/*<Col xs="12"><AppSevagir /></Col>*/}
            </Row>
        </Container>,
  document.getElementById('root')
);

serviceWorker.unregister();
