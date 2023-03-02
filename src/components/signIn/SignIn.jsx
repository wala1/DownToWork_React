import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./SignIn.scss";
import SignForm from "./SignForm";

function SignIn() {
  return (
    <div className="bg-primary d-flex align-items-center justify-content-center">
      <Container fluid className="sign">
        <Row>
          <Col md={4} className="side align-items-center">
            {/* Content for first column */}
            <div className=" d-flex flex-column justify-content-center align-items-center">
              <h1 className="wlcm">Welcome</h1>
              <div className="img ">
                <img src="dwlogo.png" alt="logo" />
              </div>
            </div>
          </Col>
          <Col md={8} className="fromulaire  ">
            {/* Content for second column */}
            <div className="form d-flex flex-column">
            <h1 className="wlcm my-4">Sign-In</h1>
            <SignForm />
            <a href="">Forgot your password ?</a>

            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SignIn;
