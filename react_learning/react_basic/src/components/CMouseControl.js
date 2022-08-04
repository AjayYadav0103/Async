import React,{Component} from 'react';
class CMouseControl extends Component{
    constructor(){
        super();
        this.state={
            x:0,
            y:0
        }
    }

    handleMouseMove=(e)=>{
        this.setState({x:e.clientX,y:e.clientY});
    }

    componentDidMount(){
        console.log("ClassComponent");
        window.addEventListener("mousemove",this.handleMouseMove)
    }
render(){
    return <div>
     {`X:${this.state.x}`}
     {`Y:${this.state.y}`}
    </div>
}
}

export default CMouseControl;