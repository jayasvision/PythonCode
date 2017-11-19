import * as React from "react";
import { connect } from "react-redux";
import { authenticate } from "./LoginActions";
import { get } from "lodash";
import { push } from "react-router-redux";
import { reduxForm, Field } from "redux-form";

class Login extends React.Component<{}, {}> {
	constructor(props) {
		super(props);
		this.state = { email: "", password: "" };
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
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
	onSubmit(values) {
		console.log(values);
		//let loginData = { email: this.state.email, password: this.state.password };
		//this.props.dispatch(authenticate(loginData));
	}
	render() {
		return (
			<div>
				{this.props.isAuthenticated ? (
					"already Logged in"
				) : (
					<div style={{ width: "50%", margin: "0 auto" }}>
						<h1>Login Form</h1>
						<form onSubmit={this.onSubmit}>
							<div>
								<label htmlFor="email">Email</label>
								<Field name="email" component="input" type="email" />
							</div>
							<div>
								<label htmlFor="password">Password</label>
								<Field name="password" component="input" type="password" />
							</div>
							<button type="submit">Submit</button>
						</form>
					</div>
				)}
			</div>
		);
	}
}

export const mapStateToProps = (state, ownProps) => ({
	isAuthenticated: state.authReducer.isAuthenticated,
});
export default reduxForm({
	form: "login",
})(connect(mapStateToProps)(Login));
