import React, {Component} from 'react';
import {FormGroup, FormControl, Button, Grid, Row, Col} from "react-bootstrap";

import './registration.css';

class Registration extends Component{
    render() {
        return (
                <form>
                    <FormGroup controlId="email">
                        <Grid>
                            <Row>
                                <Col>
                                    <h3>Register for more updates about SprintBot here...</h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={4} md={4}>
                                    <FormControl className="pull-left" type="text" placeholder="email address"/>
                                </Col>
                                <Col xs={4} md={4}>
                                    <Button className="pull-left">Register</Button>
                                </Col>
                            </Row>
                        </Grid>
                    </FormGroup>
                </form>
            )
    }
}

export default Registration;