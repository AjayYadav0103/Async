import React from 'react';

class Channel extends React.Component{
// constructor(){
//     super();
    state={
        msg:'This is home message'
    }
    // this.messageSet=function(){
    //     this.setState(this.state={msg:'Welcome to page'});
    // }
    messageSet(){
        this.setState(this.state={msg:'Welcome to page'});
    }
//}

render(){
    // debugger;
    // console.log(this);
    return <div>
      <h1>{this.state.msg}</h1>
      <button onClick={()=> this.messageSet()}>Welcome to Home Page</button>
    </div>

}
}

export default Channel;