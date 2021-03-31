import styled from "styled-components";

const Login = styled.div`
  text-align: center;

  .login-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.08);
    border-radius: 2px;
    width: 60%;
    padding: 4rem 0;
  }

  .logo {
    margin-top: 1rem;
    img {
      width: 1rem;
    }
    span {
      color: #757575;
      font-size: medium;
      font-weight: 700;
      margin-left: 1%;
      vertical-align: middle;
    }
  }

  h1 {
    font-family: Noto Sans Symbols;
    font-style: normal;
    font-weight: 600;
    font-size: 300%;
    color: #7bcecc;
    margin: 2%;
  }
  .ant-form-item-control-input {
    min-width: 8rem;
  }

  form {
    padding: 0 30%;
    input,
    span {
      line-height: 1.5rem;
      font-size: 0.8rem;
    }
    button {
      height: 100%;
      line-height: 1.5rem;
    }
  }

  .btn-signIn {
    background-color: #7bcecc;
    border-color: #7bcecc;
    width: 7rem;
  }

  .bnt-forgot {
    margin-top: -8%;
    ${"" /* margin-right: 15%; */}
    float: right;
    width: 7.5rem;
  }

  .form-button {
    margin-bottom: -3%;
  }

  .anticon {
    color: #7bcecc;
  }

  .ant-input,
  .ant-input-password {
    border-radius: 2px;
  }

  .ant-input-affix-wrapper > input.ant-input {
    margin: 0;
  }

  .ant-row {
    min-width: 3rem;
  }

  .ant-input:hover,
  .ant-input-affix-wrapper:hover {
    border-color: #7bcecc;
  }

  .ant-input:focus,
  .ant-input-affix-wrapper-focused {
    border-color: #7bcecc;
    box-shadow: 0px 0px 2px #7bcecc;
  }

  @media only screen and (max-width: 450px) and (orientation: portrait) {
    .login-wrapper {
      padding: 2rem 0;
    }
    .ant-form-item-control-input {
      min-width: 4rem;
    }
    form {
      padding: 0 1rem;
    }
  }

  @media only screen and (min-width: 451px) and (max-width: 991px) and (orientation: landscape) {
    .login-wrapper {
      padding: 1rem 0;
    }
    .ant-form-item-control-input {
      min-width: 4rem;
    }
  }
`;

export default Login;
