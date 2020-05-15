import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import * as serviceWorker from './serviceWorker';
import CountryTable from "./CovidMap/Table";
import Grafic from "./CovidMap/Grafic";
import { Container, Row, Col } from 'reactstrap';
import SearchCountry from "./CovidMap/SearchCountry";


ReactDOM.render(
        <Container className="themed-container" fluid={true}>
            <Row className ="bgColor">
                <Col xs="8"><h1>COVID-19 Dashboard by the Center for Systems Science</h1></Col>
                <Col xs="3"><SearchCountry /></Col>
            </Row>
            <Row>
                <Col xs="6"><CountryTable /></Col>
                <Col xs="6"><Grafic /></Col>
            </Row>
        </Container>,
  document.getElementById('root')
);

serviceWorker.unregister();
