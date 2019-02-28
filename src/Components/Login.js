import React from "react"
import { Form, Row, Col } from "react-bootstrap"
import ReactSVG from 'react-svg'
import logo from "../Assets/Quiz Logo.svg"

const Login = () => {
    return (

        <div className="loginContainer">
            <div className="login">
                <Row>
                    <Col>  <h1 style={{ fontFamily: "Exo", fontWeight: "bold" }}>Login</h1></Col>
                </Row>
                <Row>
                </Row>
                <Form className="form">
                    <Form.Group as={Row}>
                            <Form.Label column sm={2} >Email</Form.Label>
                        <Col sm="7">
                            <Form.Control className="username" type="email" placeholder="email" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column md={2.5} >Password</Form.Label>
                        <Col sm="7">
                            <Form.Control  className="username" type="Password" placeholder="Password" />
                        </Col>
                    </Form.Group>
                </Form>
            </div>

        </div>

    )
}
export default Login