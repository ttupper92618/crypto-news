import React from 'react';
import ReactDOM from 'react-dom';
import IconButton from './IconButton';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<IconButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});