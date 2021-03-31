import React from 'react';
import LoginComponent from './public';
import AuthorizedComponent from './authorized';

const Routes = () => {
  const loggedIn = localStorage.getItem('id_token');
  // const user = JSON.parse(localStorage.getItem('user'));

  // props.saveUserDispatch(user)
  return !loggedIn ? <LoginComponent /> : <AuthorizedComponent />;
}
  
//   const mapDispatchToProps = (dispatch) => ({
//     saveUserDispatch: (user) => dispatch(userLoginRequest_Success(user)),
//   });
  export default (Routes);