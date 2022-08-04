<<<<<<< HEAD
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
=======
import logo from './logo.svg';
import {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import Posts from './Posts';
import Pagination from './Pagination';

function App() {
  const [currentPage,setCurrentPage]=useState(0);
  const [lastCountPage,setLastCountPage]=useState(0);
  const [dataPerPage, setDataPerPage] = useState(10);
  const [posts,setPosts]=useState([]);
  const [loading,setLoading]=useState(false);
  useEffect(()=>{
    const fetchData=async()=>{
      setLoading(true);
      const res=await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    }
    fetchData();
  },[])
  return (
    <div>
      <h1>My App</h1>
      <Posts post={posts} loading={loading} lastCountPage={lastCountPage} dataPerPage={dataPerPage} setDataPerPage={setDataPerPage} setLastCountPage={setLastCountPage} currentPage={currentPage}/>
      <Pagination post={posts} loading={loading} lastCountPage={lastCountPage} dataPerPage={dataPerPage} setDataPerPage={setDataPerPage} setLastCountPage={setLastCountPage} setCurrentPage={setCurrentPage}/>
>>>>>>> 3e33ca72ce7b8cf33dcc2b6feb1637f3388749d3
    </div>
  );
}

export default App;
