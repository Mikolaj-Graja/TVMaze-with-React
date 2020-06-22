import React from 'react';
import './App.css';
import Header from './components/Header';
import ShowList from './components/ShowList';
import MoreDetails from './components/MoreDetails';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' component={ShowList} exact />
          <Route path='/moreInfo' component={MoreDetails} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
