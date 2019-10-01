import React from 'react';
import PropsTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import { Header } from 'tabler-react';
import 'tabler-react/dist/Tabler.css';

import './index.scss';


const Login = ({ signup }) => {
  const responseGoogle = (response) => {
    signup(response);
  };

  return (
    <div id="login">
      <Header.H2 className="login-header">Bitcoin</Header.H2>
      
      <NavLink exact to="/Welcome" className="login-nav">
        <GoogleLogin
          className="login-button"
          clientId="326302789976-oocj06u09gb1en8rbsjuighdegvipcdc.apps.googleusercontent.com"
          buttonText="LOGIN WITH GOOGLE"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
      </NavLink>
    </div>
  );
};

Login.propTypes = {
  signup: PropsTypes.func.isRequired,
};

export default Login;