import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

test('renders learn react link', () => {
  render(<Button text='ah'></Button>);
});
