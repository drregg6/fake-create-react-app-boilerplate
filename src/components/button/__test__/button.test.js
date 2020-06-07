import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../button';
import renderer from 'react-test-renderer';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button></Button>, div);
});