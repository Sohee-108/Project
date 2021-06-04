import React, { Component } from 'react';
import Nav from "./components/Nav.js";
import Header from "./components/Header.js";
import Content from "./components/Content.js";
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      mode: 'read',
      subject:{title:'WEB', sub:'World Wide Web!'},
      welcome:{title:'Welcome', desc:'Hello, React!!'},
      contents: [
        {id:1, title:'HTML', desc:'HTML is for information' },
        {id:2, title:'CSS', desc:'CSS is for design' },
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive' }
      ]
    }
  }

  render(){
    console.log('App rander');
    var _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === 'read'){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    
    return(
      <div classNmae="App">
        {/* <Header title={this.state.subject.title} 
                sub={this.state.subject.sub}>

        </Header> */}
        <header>
          <h1><a href="/" onClick={function(e){
            console.log(e);
            e.preventDefault();
           // this.state.mode = 'welcome';
           this.setState({
             mode:'welcome'
           })
        }.bind(this)}>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
        </header>
        <Nav data={this.state.contents}></Nav>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
