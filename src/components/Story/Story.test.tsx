import React from 'react';
import ReactDOM from 'react-dom';
import Story from './Story';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Story />, div);
  ReactDOM.unmountComponentAtNode(div);
});