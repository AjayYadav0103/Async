import React from "react";
import Testing from './Testing.js';
class Cheader extends React.Component{
    //Creating state outside the constructor
    state={
        users:[
            {id:1,name:"brian",class:"A"},
            {id:2,name:"fernando",class:"B"}
        ]
    }
    render(){
        return <>
                 <h1>{this.props.children[1]}-Class Component Header {this.props.name} - {this.props.last} - {this.props.children[0]}</h1>
                 {this.state.users.map((users)=>{return <i key={users.id}>{users.id}</i>})} 
                 {this.state.users.map((users)=>{return <Testing key={users.id} value={users.id}></Testing>})}
               </>
    }
} 

export default Cheader;