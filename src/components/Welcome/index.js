
import React from 'react';
import PropsTypes from 'prop-types';
import { Card, Button, Header } from 'tabler-react';
import 'tabler-react/dist/Tabler.css';

const Welcome = ({ bitcoin, postdata, signout }) => {
  const handlesingout = () => {
    signout();
  };
  return (
    <div id="Welcome">
      <Header.H2>Bienvenue {postdata.name} </Header.H2>
      <Card className="card">
        <Card.Header>
          <Card.Title> Cours du bitcoin  </Card.Title>
        </Card.Header>
        <Card.Body>
          {bitcoin} euros
        </Card.Body>
      </Card>
      <Button color="primary" onClick={handlesingout}>Se déconnecter</Button>

    </div>
  );
};

Welcome.propTypes = {
  bitcoin: PropsTypes.string.isRequired,
  signout: PropsTypes.func.isRequired,
  postdata: PropsTypes.object.isRequired,
};

export default Welcome;
