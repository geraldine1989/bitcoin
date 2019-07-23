
import React from 'react';
import PropsTypes from 'prop-types';
import { GoogleLogin } from 'react-google-login';


const Login = ({ handleLogin }) => {
  // const responseGoogle = (response) => {
  //   console.log(response);
  // }

  // const handleLogin = () => {
  //   console.log('je suis dans component');
  //   loginSubmit();
  // }
  return (
    <div id="login" >
      <button onClick={handleLogin}>Se connecter</button>
  {/* <GoogleLogin
    clientId="326302789976-oocj06u09gb1en8rbsjuighdegvipcdc.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'} />*/}
  
    </div>
   
  );
}

Login.propTypes = {
  handleLogin: PropsTypes.func.isRequired,

};

export default Login;
