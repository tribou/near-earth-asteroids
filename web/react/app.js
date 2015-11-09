import React from 'react';
import ReactDOM from 'react-dom';
import Index from './components/Index.jsx';
import '../styles/app.scss';

// Render the React Index into DOM at #app
ReactDOM.render(
  React.createElement(Index),
  document.getElementById('app')
);

