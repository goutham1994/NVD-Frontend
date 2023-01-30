import React from 'react'
import PropTypes from"prop-types"
import "../login/Login.comp.css"
import logo from "../../images/logo.png"
import { Container,Row,Col,Form,Button,FormGroup,FormLabel,FormControl } from "react-bootstrap";

export const LoginForm= ({handleOnchange,handleOnSubmit,formSwitcher,loginid,pass}) => {
  return (
    <>
    <img className="app-logo" src={logo} alt="app-logo"></img>
    <Container className="login-container">
        <Row>
            <Col>
            <Form className="login-form" autoComplete="off" onSubmit={handleOnSubmit}>
                <FormGroup>
                    <FormLabel>Login ID</FormLabel>
                    <FormControl
                    type="loginid"
                    name="loginid"
                    onChange={handleOnchange}
                    defaultValue={loginid}
                    placeholder="Enter your Login ID"
                    required
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel>Password</FormLabel>
                    <FormControl
                    type="password"
                    name="password"
                    onChange={handleOnchange}
                    defaultValue={pass}
                    placeholder="Enter your password"
                    required
                    />
                </FormGroup>
                <br/>
                <Button className="login-button" type="submit">Login</Button>
            </Form>
            </Col>
        </Row>
        <Row>
            <Col>
            <br/>
            <a href="#!" onClick={() => formSwitcher("reset")}>Forgot Password</a>
            <br/>
            </Col>
        </Row>
    </Container>
    </>
  )
}

LoginForm.propTypes ={
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    loginid: PropTypes.string.isRequired,
    pass: PropTypes.string.isRequired,
};