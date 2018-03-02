import React, { Component } from 'react';
import './Product.css'

class Product extends Component {

  constructor(props){
    super(props);
    
    this.state = {
        totalCost:0,
        products:[
            {   
                id:1,
                name:'Potato',
                selected:'false',
                price:200
            },
            {
                id:2,
                name:'Lemon',
                selected:'false',
                price:500
            },
            {
                id:3,
                name:'Tomato',
                selected:'false',
                price:300
            },
            {
                id:4,
                name:'Carrot',
                selected:'false',
                price:250
            },
        ]
    }
  }

  handleClick = (id) =>{
    const products = this.state.products
    if(products[id - 1].selected == 'true'){
        products[id - 1].selected = 'false'
    }else{
        products[id - 1].selected = 'true'
    }
    this.setState({
        products:products
    })
    var totalCost = 0;

    this.state.products.map((product, index) =>{
        if(product.selected == 'true'){
            totalCost += product.price
        }
    })
    this.setState({
        totalCost:totalCost
    })
    console.log(totalCost);

  }

  render() {
    const ProductAPI = this.state.products.map((product, index)=>{
        return(
            <div className="product" key={index} onClick={this.handleClick.bind(this, product.id)}>
                <span>{product.name}</span> <span>{product.price} tg</span>   
            </div>
        );
    })
    
      return(
        <div className="Product">
            <ul>{ProductAPI}</ul>
            <div>Total {this.state.totalCost} tg</div>
        </div>
      );
  }
}

export default Product;
