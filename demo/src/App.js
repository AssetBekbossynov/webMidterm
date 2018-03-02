import React, { Component } from 'react';
import './App.css';
import Product from './Product.js';

class App extends Component {

  constructor(props){
    super(props);
    
    this.state = {
      buttons:[
        {
          id:1,
          name:'Home',
          clicked:false
        },
        {
          id:2,
          name:'About',
          clicked:false
        },
        {
          id:3,
          name:'Contact',
          clicked:false
        }
      ]
    }
  }

  handleClick = (id) =>{
    const buttons = this.state.buttons
    buttons.map((button)=>{
      button.clicked = false
    })

    if(!buttons[id - 1].clicked){
      buttons[id - 1].clicked = true
    }

    this.setState({
      buttons:buttons
    })
    console.log(this.state.buttons[id - 1].clicked + " " + id);
    
  }

  render() {
    const Buttons = this.state.buttons.map((button, index)=>{
        if(button.clicked){
          return(
            <div key={index} className="clicked-btn" onClick={this.handleClick.bind(this, button.id)}>
              {button.name}
            </div>
          );
        }else{
          return(
            <div key={index} className="btn" onClick={this.handleClick.bind(this, button.id)}>
              {button.name}
            </div>
          )
        }
    })
    
      return(
        <div className="Product">
            <div>{Buttons}</div>
            <Product></Product>   
        </div>
      );
  }
}

export default App;
