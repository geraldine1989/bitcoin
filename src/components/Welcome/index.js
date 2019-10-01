
import React from 'react';
import PropsTypes from 'prop-types';
import { Card, Button, Header } from 'tabler-react';

import './index.scss';

const Welcome = ({ bitcoin, postdata, signout }) => {
  const handlesingout = () => {
    signout();
  };
  return (
    <div id="welcome">
      <div className="header">
        <Header.H2>
        Bienvenue {postdata.name} 
        </Header.H2>
        <Button color="primary" onClick={handlesingout}>Se déconnecter</Button>
      </div>

      
      <Card className="card">
        <Card.Header className="card-title">
          <Card.Title> Cours du bitcoin  </Card.Title>
        </Card.Header>
        <Card.Body className="card-body">
          {bitcoin} euros
        </Card.Body>
      </Card>
 

    </div>
  );
};

Welcome.propTypes = {
  bitcoin: PropsTypes.string.isRequired,
  signout: PropsTypes.func.isRequired,
  postdata: PropsTypes.object.isRequired,
};

export default Welcome;
