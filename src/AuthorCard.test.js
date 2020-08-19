/* eslint-disable max-len */
/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import AuthorCard from './AuthorCard';

describe('card rendering for exists author', () => {
  const author = {
    name: 'Lewis Carroll',
    email: 'LewisCarroll@gmail.com.uk',
    avatar: 'https://440px-LewisCarrollSelfPhoto.jpg',
    bio: 'Charles Lutwidge Dodgson (27 January 1832 – 14 January 1898)',
  };

  test('rendered name', () => {
    render(<AuthorCard author={author}/>);
    expect(screen.getByText('Lewis Carroll')).toBeInTheDocument();
  });

  test('rendered email', () => {
    render(<AuthorCard author={author}/>);
    expect(screen.getByText('LewisCarroll@gmail.com.uk')).toBeInTheDocument();
  });

  test('rendered avatar', () => {
    render(<AuthorCard author={author}/>);
    expect(screen.getByAltText('Lewis Carroll')).toBeInTheDocument();
  });

  test('rendered bio', () => {
    render(<AuthorCard author={author}/>);
    expect(screen.getByText('Charles Lutwidge Dodgson (27 January 1832 – 14 January 1898)')).toBeInTheDocument();
  });
});
