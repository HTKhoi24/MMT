import React, { Component } from 'react'
import Header from './Header'
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class SignUp extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="container">
                <Form>
                    <FormGroup row>
                        <Label for="firstName" sm={2}>First Name : </Label>
                        <Col sm={10}>
                            <Input type="text" name="firstName" id="firstName" placeholder="First Name" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="lastName" sm={2}>Last Name : </Label>
                        <Col sm={10}>
                            <Input type="text" name="lastName" id="lastName" placeholder="Last Name" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="userName" sm={2}>User Name : </Label>
                        <Col sm={10}>
                            <Input type="text" name="userName" id="userName" placeholder="User Name" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="email" sm={2}>Email : </Label>
                        <Col sm={10}>
                            <Input type="email" name="email" id="email" placeholder="Your Email Address" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="password" sm={2}>Password :</Label>
                        <Col sm={10}>
                            <Input type="password" name="password" id="password" placeholder="Your Password" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="gender" sm={2}>Gender : </Label>
                            <Col sm={10}>
                                <Input type="select" name="select" id="select" >
                                    <option>Male</option>
                                    <option>Female</option>
                                </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="birthDate" sm={2}>Date Of Birth : </Label>
                        <Col sm={10}>
                            <Input
                                type="date"
                                name="date"
                                id="exampleDate"
                                placeholder="date placeholder"
                            />
                        </Col>
                    </FormGroup>
                    {/* <FormGroup row>
                        <Label for="exampleFile" sm={2}>File</Label>
                        <Col sm={10}>
                            <Input type="file" name="file" id="exampleFile" />
                            <FormText color="muted">
                                This is some placeholder block-level help text for the above input.
                                It's a bit lighter and easily wraps to a new line.
          </FormText>
                        </Col>
                    </FormGroup> */}

                    <FormGroup check row>
                        <Col sm={{ size: 10, offset: 2 }}>
                            <Button>Submit</Button>
                        </Col>
                    </FormGroup>
                </Form>
    
                </div>    
            </div>
        )
    }
}
