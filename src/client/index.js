import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/App';

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

ReactDOM.hydrate(<App />, document.getElementById('app'));