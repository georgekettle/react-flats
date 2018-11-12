import React from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';

import App from './components/app.jsx';

const Hello = props => <div>Hello, {props.name}</div>;

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<App defaultMapCenter={{lat: 48.884211, lng: 2.34689}}/>, root);
}
