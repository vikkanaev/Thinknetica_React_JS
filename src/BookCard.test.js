import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import BookCard from './BookCard';

describe('card rendering for exists book', () => {
  const book = {
    title: 'Alice in Wonderland',
    description: 'Alice\'s Adventures in Wonderland (commonly shortened to Alice in Wonderland)',
    pages: 200,
    language: 'English',
    progress: 12,
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Alice%27s_Adventures_in_Wonderland_cover_%281865%29.jpg/440px-Alice%27s_Adventures_in_Wonderland_cover_%281865%29.jpg',
    author: {
      name: 'Lewis Carroll',
      email: 'LewisCarroll@gmail.com.uk',
      avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/LewisCarrollSelfPhoto.jpg/440px-LewisCarrollSelfPhoto.jpg',
      bio: 'Charles Lutwidge Dodgson (27 January 1832 – 14 January 1898), better known by his pen name Lewis Carroll, was an English writer of children\'s fiction, notably Alice\'s Adventures in Wonderland and its sequel Through the Looking-Glass. He was noted for his facility at word play, logic, and fantasy. The poems Jabberwocky and The Hunting of the Snark are classified in the genre of literary nonsense. He was also a mathematician, photographer, inventor and Anglican deacon.',
    },
    minPrice: 10,
    suggestrdPrice: 25,
    earned: 1000,
    expected: 100500,
  };

  test('rendered title', () => {
    render(<BookCard book={book}/>);
    expect(screen.getByText('Alice in Wonderland')).toBeInTheDocument();
  });

  test('rendered description', () => {
    render(<BookCard book={book}/>);
    expect(screen.getByText('Alice\'s Adventures in Wonderland (commonly shortened to Alice in Wonderland)')).toBeInTheDocument();
  });

  test('rendered cover', () => {
    render(<BookCard book={book}/>);
    expect(screen.getByAltText('Alice in Wonderland')).toBeInTheDocument();
  });

  test('rendered minPrice', () => {
    render(<BookCard book={book}/>);
    expect(screen.getByText('MINIMUM PRICE: $10')).toBeInTheDocument();
  });

  test('rendered suggestrdPrice', () => {
    render(<BookCard book={book}/>);
    expect(screen.getByText('SUGGESTED PRICE: $25')).toBeInTheDocument();
  });

  test('rendered button', () => {
    render(<BookCard book={book}/>);
    expect(screen.getByText('Subscribe')).toBeInTheDocument();
  });
});
