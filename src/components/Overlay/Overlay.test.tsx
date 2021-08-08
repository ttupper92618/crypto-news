import React from 'react';
import ReactDOM from 'react-dom';
import Overlay from './Overlay';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Overlay />, div);
  ReactDOM.unmountComponentAtNode(div);
});