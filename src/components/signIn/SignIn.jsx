import React from "react";
import { Container, Col, Row ,Button} from "react-bootstrap";
// import "./SignIn.scss";
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
          <Col md={8} className="fromulaire ">
            {/* Content for second column */}
            <div className="form d-flex flex-column">
            <h1 className="wlcm my-2">Sign-In</h1>
            <SignForm />
            <div className="d-flex flex-column boutons"> 
            <a href="/forget-password">Forgot your password ?</a>
            <Button variant="secondary"  className="bouton my-2" style={{ backgroundColor: "lightGray" ,
             outline:"none" , border:"none",
              color: "#3F6DB1" ,
               fontWeight:"bold" }}>
                <img src="facebook.svg" className="logo"/>
                Sign-in with Facebook</Button>

            <Button variant="secondary" className="bouton" style={{ backgroundColor: "lightGray" ,
             outline:"none" ,
              border:"none" , 
              color: "#3F6DB1" , 
              fontWeight:"bold" }}>
                <img src="google.svg" className="logo" alt="" />
                  Sign-in with google
                  </Button>
                  <h6 className="my-2">Don't have an account ?</h6>
                  <Button variant="primary" className="bouton" style={{                   fontWeight:"bold" }}>
                Sign-up
                  </Button>

                  </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SignIn;
