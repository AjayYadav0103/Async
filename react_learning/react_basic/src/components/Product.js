import React, { Component } from 'react';

export class Product extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        productID:'',
        qty:0
      }
    }

    addToCart=(pid)=>{
      this.setState({
          productID:pid,
          qty:this.state.qty+1
      });
    }
    
  render() {
    return <div>
        <button onClick={()=>{this.addToCart(1)}}>Add to cart</button>
        <Cart productID={this.state.productID} qty={this.state.qty}></Cart>  
    </div>;
  }
}

class Cart extends Component {
   constructor(props){
       super(props);
       this.state={
           qty:props.qty
       }
   }
   
//     setCount=()=>{
//        this.setState({
//            qty:this.state.qty+1
//        })
//    }

   static getDerivedStateFromProps(props,state){
    //    console.log(props.qty);
    //    console.log(state.qty);
    if(props.qty==state.qty){
        return null;
    }
    return{qty:props.qty};
   }
   
   componentDidMount(){
       console.log('componentDidMount is called');
   }
   componentDidUpdate(){
       console.log('componentDidUpdate is called');
   }
    render(){
     return <div> 
     <h1>Cart:{this.state.qty}</h1>
     {/* <button onClick={this.setCount}>Update Quantity</button> */}
     </div>
 }
}


export default Product;
