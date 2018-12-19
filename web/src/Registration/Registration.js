import React, {Component} from 'react';
import {FormGroup, FormControl, Button, Grid, Row, Col} from "react-bootstrap";
import newApi from '../ApiClient/Api';
import Spinner from './Spinner-1s-200px.apng';
import Tick from './tick.png';

class Registration extends Component{
    constructor(props) {
        super(props);
        this.state = {email: '', api: 0};

        this.handleChange = this.handleChange.bind(this);
        this.doRegister = this.doRegister.bind(this);
    }

    handleChange(event) {
        this.setState({email: event.target.value});
    }


    render() {
        if(this.state.api === 0){
            return this.registerForm()
        }
        if(this.state.api === 1) {
            return this.throbber()
        }
        if(this.state.api === 2){
            return this.registered()
        }
    }
    doRegister(event) {
        let me = this;
        this.setState({api: 1, email: this.state.email});
        event.preventDefault();
        let api = newApi();
        api.register(this.state.email).then(function(response) {
            me.setState({api: 2, email: me.state.email});
            return response.json();
        });
    }

    registerForm(){
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
    throbber(){
            return(<img  alt="registering..." width="64px" height="64px" src={Spinner}/>)
    }
    registered(){
            return(<img alt="registration successful" width="64px" height="64px" src={Tick}/>)
    }
}


export default Registration;