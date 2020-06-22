import React from 'react';
import './App.css';
import Header from './components/Header';
// import { Typography } from '@material-ui/core';
import ShowList from './components/ShowList';

function App() {
  return (
    <div className='App'>
      <Header />
      <ShowList />
    </div>
  );
}

export default App;
