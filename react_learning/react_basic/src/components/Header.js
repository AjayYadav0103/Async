import React from 'react'
function Header(props){
    return <div>
                {props.children[1]}
                <h1>This is Header {props.name} {props.last}</h1>
                {props.children[0]}
           </div>
}


export default Header;