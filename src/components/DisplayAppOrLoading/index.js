import React from 'react';
import Bitcoin from 'src/containers/Bitcoin';
import Login from 'src/containers/Login';

// Si ce composant a un prop loading qui vaut true -> rendre composant loading

// Sinon rendre App

const DisplayAppOrLoading = ({ loading }) => (
  loading ? <Bitcoin /> : <Login />
);

export default DisplayAppOrLoading;
