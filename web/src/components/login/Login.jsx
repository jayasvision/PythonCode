import * as React from "react";
import { connect } from "react-redux";
import { authenticate } from "./LoginActions";
import { get } from "lodash";
import { push } from "react-router-redux";
import { reduxForm, Field } from "redux-form";
import { Container, Row, Col, Button } from "reactstrap";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.isAuthenticated) {
      let redirect = get(this.props, ["location", "query", "redirect"], null);
      if (redirect) {
        this.props.dispatch(push({ pathname: redirect }));
      }
    }
  }
  onChange(event) {
    event.persist();
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit(values) {
    //console.log(values);
    let loginData = { email: values.email, password: values.password };
    this.props.dispatch(authenticate(loginData));
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <Container>
        {this.props.isAuthenticated ? (
          "already Logged in"
        ) : (
          <Row style={{ width: "50%", margin: "0 auto" }}>
            <Col xs={12}>
              <h1>Login Form</h1>
            </Col>
            <Col xs={12}>
              <form onSubmit={handleSubmit(this.handleSubmit)}>
                <Row>
                  <Col xs={6} md={2}>
                    <label htmlFor="email">Email</label>
                  </Col>
                  <Col xs={6} md={10}>
                    <Field name="email" component="input" type="email" />
                  </Col>
                </Row>
                <Row>
                  <Col xs={6} md={2}>
                    <label htmlFor="password">Password</label>
                  </Col>
                  <Col xs={6} md={10}>
                    <Field name="password" component="input" type="password" />
                  </Col>
                </Row>
                <Row>
                  <Col xs={{ size: 6, offset: 3 }}>
                    <button type="submit">Submit</button>
                  </Col>
                </Row>
              </form>
            </Col>
          </Row>
        )}
      </Container>
    );
  }
}

export const mapStateToProps = (state, ownProps) => ({
  isAuthenticated: state.authReducer.isAuthenticated,
});
export default reduxForm({
  form: "login",
})(connect(mapStateToProps)(Login));
