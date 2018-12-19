import React, {Component} from 'react';
import {FormGroup, FormControl, Button, Grid, Row, Col} from "react-bootstrap";
import newApi from '../ApiClient/Api';

class Registration extends Component{
    constructor(props) {
        super(props);
        this.state = {email: ''};

        this.handleChange = this.handleChange.bind(this);
        this.doRegister = this.doRegister.bind(this);
    }

    handleChange(event) {
        this.setState({email: event.target.value});
    }


    render() {
        return (<form>
            <FormGroup controlId="register">
                <Grid>
                    <Row>
                        <Col>
                            <h3>Register for more updates about SprintBot here...</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4} md={4}>
                            <FormControl name="email" className="pull-left" type="text" placeholder="email address" onChange={this.handleChange}/>
                        </Col>
                        <Col xs={4} md={4}>
                            <Button className="pull-left" onClick={this.doRegister}>Register</Button>
                        </Col>
                    </Row>
                </Grid>
            </FormGroup>
        </form>)
    }
    doRegister(event) {
        event.preventDefault();
        let api = newApi();
        api.register(this.state.email).then(function(response) {
            return response.json();
        });
    }
}


export default Registration;