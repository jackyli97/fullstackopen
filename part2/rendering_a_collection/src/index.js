import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App'

const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2019-05-30T17:30:31.098Z',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only Javascript',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    data: '2019-05-30T19:20:14.298Z',
    important: true
  }
]

ReactDOM.render(
    <App notes={notes}/>,
  document.getElementById('root')
);

