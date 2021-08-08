import React from 'react';
import ReactDOM from 'react-dom';
import Viewer from './Viewer';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Viewer />, div);
  ReactDOM.unmountComponentAtNode(div);
});