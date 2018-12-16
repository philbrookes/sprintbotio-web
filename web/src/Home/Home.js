import React, { Component } from 'react';
import {Grid, Row, Col, ListGroup, ListGroupItem, Panel} from 'react-bootstrap';

import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Registration from '../Registration/Registration';
import Features from '../Features/Features';

class Home extends Component {
    render() {
        return (<Grid>
            <Row className="show-grid">
                <Col xs={12} md={12}>
                    <Header></Header>
                </Col>
                <Col xs={12} md={12}>
                    <Banner fgcolor="white" bgcolor="purple">Sprint management... Automated</Banner>
                </Col>
                <Col xs={12} md={12}>
                    <Features></Features>

                </Col>
                <Col xs={12} md={12}>

                    <Registration></Registration>
                </Col>
            </Row>
        </Grid>);
    }
}


export default Home;