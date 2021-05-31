import React, { Component } from 'react';
import Nav from "./components/Nav.js";
import Header from "./components/Header.js";
import Content from "./components/Content.js";
import './App.css';

class App extends Component {
  render(){
    return(
      <div classNmae="App">
        <Header title="WEB" sub="world wide web!"></Header>
        <Header title="React" sub="For UI"></Header>
        <Nav></Nav>
        <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
      </div>
    );
  }
}


export default App;
