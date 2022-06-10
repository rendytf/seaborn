import React, { Component, createRef } from 'react';
import { Form, FormGroup, Input, Label, FormText, Button } from 'reactstrap';

class Register extends Component {
    constructor(props) {
        super(props)
        this.emailPhone = createRef()
    }

    render() {
        return (
            <Form inline>
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
                    <FormText>
                        Example: 08XXXXXXXXXXX/example@seaborn.com
                    </FormText>
                </FormGroup>
                <Button className='p-3' block={true}>Create Account</Button>
            </Form>
        );
    }
}

export default Register;