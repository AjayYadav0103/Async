import React from 'react';
import subjects from '../HOC';
class Vikas extends React.Component{

state={
    marks:0
}

handleMarks=()=>{
    this.setState({
        marks:this.state.marks+1
    });
}

render(){
    return <h3 onMouseOver={this.handleMarks}>Vikas's Marks:{this.state.marks} Subject:{this.props.hocsub}</h3>
}
}

export default subjects(Vikas);