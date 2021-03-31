import React, { useState } from 'react';
import { Form, Input, Button} from 'antd';
import logo from '../../logo.svg';
import LoginCss from '../../styles/login';
import { loginFetch } from '../../actions/login.actions';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

const LoginComponent = (props) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeUsername = (e) => {
    e.persist();
    setUsername(e.target.value);
  }

  const handleChangePassword = (e) => {
    e.persist();
    setPassword(e.target.value);

  }

  const handleSubmit = () => {

    const userState = Object.assign({
      username,
      password
    });
    props.userLoginFetch(userState);
  }
  return (
    <LoginCss>
      <div className="login-wrapper">
          <div className="logo">
            <img src={logo} alt="logo" />
            <span>Fly Education</span>
          </div>
          <h1>Sign In</h1>
          <Form onFinish={handleSubmit}>
            <Form.Item>
              <Input
                required={true}
                name="username"
                placeholder="Your email*"
                onChange={handleChangeUsername}
              />
            </Form.Item>

            <Form.Item>
              <Input.Password
                required={true}
                name="password"
                placeholder="Your Password*"
                onChange={handleChangePassword}
              />
            </Form.Item>

            <Form.Item>
              <Button className="btn-signIn" type="primary" htmlType="submit">
                Sign In
              </Button>
            </Form.Item>
            <Form.Item className="form-button">
              <Button className="bnt-forgot" type="link" htmlType="button">
                Forgot Password?
              </Button>
            </Form.Item>
          </Form>
        </div>
    </LoginCss>
  );
}

const mapDispatchToProps = (dispatch) => ({
  userLoginFetch: (userInfo) => dispatch(loginFetch(userInfo)),
});
export default connect(
  null,
  mapDispatchToProps
)(withRouter(LoginComponent));
