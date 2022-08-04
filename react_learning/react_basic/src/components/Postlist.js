import React, { Component } from 'react';
import axios from 'axios';

export class Postlist extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         post:[],
         error:''
      }
    }
    
    async componentDidMount(){
        await axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            this.setState({
                post:response.data
            })
        }
        )
        .catch(error => {
            this.setState({
                error:'Error in fetching data'
            })
        })
    }

  render() {
    const {post,error}=this.state;
    return <div>
        List of Post Data
        {post.length!==0?post.map((post)=>{
          return <div key={post.id}>
              {post.body}
          </div>
        }):error===''?<div>No Data</div>:<div>{error}</div>}
    </div>
  }
}

export default Postlist;
