import React from 'react';
import './Style.css'

const Stylesheet = (props) => {
  const className=props.isValue?'demo1':'demo';
  return <div>
      <h1 className={`${className} demo2`}>Hello Stylesheet</h1>
  </div>;
};

export default Stylesheet;
