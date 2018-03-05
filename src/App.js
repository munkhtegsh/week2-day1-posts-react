import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import People from './People';
import AddPosts from './AddPosts';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Jeremy",
      posts: [
        { author: "Steve", title: "A post", text: "More text" },
        { author: "S", title: "A post", text: "More text" },
        { author: "St", title: "A post", text: "More text" },
        { author: "Ste", title: "A post", text: "More text" },
        { author: "Steve", title: "A post", text: "More text" }
      ]
    };

    this.add = this.add.bind(this);
  }

  //passing object from child to parent using cb
  add(post) {
     
    this.setState({posts: this.state.posts.concat(post)})
  }

  render() {
    return (
      <div className="App">
         <Nav userName={this.state.name}/>
          <People posts = {this.state.posts}/>
          <AddPosts add={this.add}/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
