import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './App';

const book = {
  title: 'Alice in Wonderland',
  description: 'Alice\'s Adventures in Wonderland (commonly shortened to Alice in Wonderland) is an 1865 novel by English author Lewis Carroll (the pseudonym of Charles Dodgson). It tells of a young girl named Alice, who falls through a rabbit hole into a subterranean fantasy world populated by peculiar, anthropomorphic creatures. It is considered to be one of the best examples of the literary nonsense genre. The tale plays with logic, giving the story lasting popularity with adults as well as with children.',
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

const render = () => ReactDOMServer.renderToString(<App book={book}/>);

export default render;
