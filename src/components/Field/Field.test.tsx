import React from 'react';
import ReactDOM from 'react-dom';
import Field from './Field';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Field />, div);
  ReactDOM.unmountComponentAtNode(div);
});