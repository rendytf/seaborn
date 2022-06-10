import React, { Component, createRef, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Form, FormGroup, FormText, Input, Label, Row } from 'reactstrap';

import '../../supports/SbStyle.css'

class Login extends Component {
    constructor(props) {
        super(props)
        this.emailPhone = React.createRef();
    }

    handleInput = () => {
        let logInput = this.emailPhone.current.value
        return console.log(logInput)
    }
    

    render() {
        return (
            <Form inline onSubmit={this.handleInput}>
                <FormGroup floating>
                    <Input 
                        innerRef={this.emailPhone}
                        id="phoneEmail"
                        className='sb-form-control'
                        name="email"
                        placeholder="Phone number/email"
                        type='text'
                    />
                    <Label for="phoneEmail">
                        Phone number/email
                    </Label>
                </FormGroup>

                <FormGroup floating>
                    <Input 
                        id="password"
                        className='sb-form-control'
                        name="email"
                        placeholder="Password"
                        type='password'
                    />
                    <Label for="password">
                        Password
                    </Label>
                </FormGroup>

                <Row className='align-items-center'>
                    <Col xs='5'>
                        <Button className='p-3' block={true}>Sign in</Button>
                    </Col>
                    <Col xs='7' className='d-flex justify-content-end'>
                        <Link to='/' className=''>Forgot password?</Link>
                    </Col>
                </Row>
            </Form>
        );
    }
}

export default Login;