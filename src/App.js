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
    </div>
  );
}

export default App;
