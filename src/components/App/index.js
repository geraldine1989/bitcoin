/**
 * Npm import
 */
import React from 'react';

/**
 * Local import
 */
import Example from 'src/containers/Example';
import Bitcoin from 'src/containers/Bitcoin';
import './app.scss';

/**
 * Code
 */
const App = () => (
  <div id="app">
    <Bitcoin />
    <Example />
  </div> 
);

/**
 * Export
 */
export default App;
