import { useState, useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [barValue, setBarValue] = useState(0);
  const maxBarValue = useRef(`${window.innerWidth}`);
  //const maxBarValue = useRef(10);
  useEffect(() => {
    //debugger;
    let interval;
    if (maxBarValue.current!== barValue) {
     interval = setInterval(() => {
        console.log(barValue);
        setBarValue(value => value + 1);
    }, 1000);
  }
    else{
      clearInterval(interval);
    }
    return () => { clearInterval(interval); }
  }, [barValue])
  return (
    <div className="App">
      <progress style={{ 'width': '100%' }} value={barValue} max={maxBarValue.current}></progress>
      {parseInt((barValue/maxBarValue.current)*100)}%
    </div>
  );
}

export default App;
