import React from 'react';

const FunctionClick = () => {
    function changeEvent(e){
        e.preventDefault();
        console.log("Hello Event Handler.....");
    }
  return <div>
      <a href="https://www.google.com" onClick={changeEvent}>Click Me</a>
  </div>;
};

export default FunctionClick;
