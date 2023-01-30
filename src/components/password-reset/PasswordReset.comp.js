import React from 'react'
import PropTypes from"prop-types"
import "../password-reset/PasswordReset.comp.css"
import logo from "../../images/logo.png"
import { Container,Row,Col,Form,Button,FormGroup,FormLabel,FormControl } from "react-bootstrap";

export const ResetPassword= ({handleOnchange,handleOnResetSubmit,formSwitcher,loginid}) => {
  return (
    <>
    <img className="app-logo" src={logo} alt="app-logo"></img>
    <Container className="reset-container">
        <Row>
            <Col>
            <Form className="reset-form" autoComplete="off" onSubmit={handleOnResetSubmit}>
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
                <br/>
                <Button className="reset-button" type="submit">Reset Password</Button>
            </Form>
            </Col>
        </Row>
        <Row>
            <Col>
            <br/>
            <a href="#!" onClick={() =>formSwitcher("login")}>Login Now</a>
            <br/>
            </Col>
        </Row>
    </Container>
    </>
  )
}

ResetPassword.propTypes ={
    handleOnChange: PropTypes.func.isRequired,
    handleOnResetSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    loginid: PropTypes.string.isRequired,
};