
import React from 'react';
import PropsTypes from 'prop-types';
import { Card, Button } from 'tabler-react';

const Bitcoin = ({ bitcoin, handleLogin } ) => (
  <div id="bitcoin" >
        <Button color="primary" onClick={handleLogin}> Se déconnecter</Button>

    <Card>
        <Card.Header>
          <Card.Title>Cours du bitcoin</Card.Title>
        </Card.Header>
        <Card.Body>
          <div>Bitcoin = {bitcoin} euros </div>
        </Card.Body>
      </Card>
  </div>
 
);

Bitcoin.propTypes = {
  bitcoin: PropsTypes.string.isRequired,
  handleLogin: PropsTypes.func.isRequired,
};

export default Bitcoin;
