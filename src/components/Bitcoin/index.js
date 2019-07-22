
import React from 'react';
import PropsTypes from 'prop-types';
import { Card } from 'tabler-react';

const Bitcoin = ({ bitcoin } ) => (
  <div id="bitcoin" >
    <p>coucou je suis dans bitcoin</p>
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
};

export default Bitcoin;
