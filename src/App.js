import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Content from './containers/Content';


function App() {
  return (
    <React.Fragment>
      <Header>Priority</Header>
      <Content />
    </React.Fragment>
  );
}

export default App;
