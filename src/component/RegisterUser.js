import React, { Component } from "react";
import {
  Button,
  Col,
  Row,
  Card,
  CardBody,
  CardSubtitle,
  CardFooter,
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
import { Link } from "react-router-dom";


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
// const isNumber = (val) => !isNaN(+val);
const validateEmail = (val) => {
  var re = /\S+@\S+\.\S+/;
  return re.test(val);
};

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: this.props.users,
      email: "",
      password: "",
      isRegistered: false,
      touched: {
        email: false,
        password: false,
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (values) => {
    console.log("Current state is: " + JSON.stringify(values));
    this.props.addUser(values.email,values.password);
    alert("Successfully Added");
    // const newUser = {
    //     id: this.state.users.length,
    //     email: values.email,
    //     password: values.password
    //   };
  
    //   const users = [...this.state.users];
    //   users.push(newUser);
      
    //   this.setState(
    //     {
    //       users: users,
    //       email:"",
    //       password:""
    //     },
    //     () => {
    //       alert("Current state is: " + JSON.stringify(this.state));
    //     });
    };

    

  render() {
    return (
      <div className="container container-size">
        <div className="row">
          <div className="col">
            <Card
              style={{ backgroundColor: "#e3f2fd", borderColor: "primary " }}
              className="card-login"
            >
              <CardSubtitle>
                <h5>Sign Up for free</h5>
              </CardSubtitle>
              <CardBody>
                <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                  <Row className="form-group">
                    <Col>
                      <Control.text
                        model=".email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        className="form-control"
                        validators={{
                          required,
                          validateEmail,
                        }}
                      />
                      <Errors
                        className="text-danger"
                        model=".email"
                        show="touched"
                        component="div"
                        messages={{
                          required: "Required",
                          validateEmail: "Invalid email id",
                        }}
                      />
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <Col>
                      <Control.text
                        model=".password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        className="form-control"
                        validators={{
                          required,
                          minLength: minLength(6),
                          maxLength: maxLength(15),
                        }}
                      />
                      <Errors
                        className="text-danger"
                        model=".password"
                        show="touched"
                        component="div"
                        messages={{
                          required: "Required",
                          minLength: "Must be 6 characters in length",
                          maxLength: "Must be 15 characters or less",
                        }}
                      />
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <Col>
                      <Button
                        type="submit"
                        color="primary"
                        className="loginButton"
                      >
                        Sign Up
                      </Button>
                    </Col>
                  </Row>
                </LocalForm>
              </CardBody>
              <CardFooter>
                Already have an account ?  {"   "}
                <Link to="/login">Log In</Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}
export default Register;
