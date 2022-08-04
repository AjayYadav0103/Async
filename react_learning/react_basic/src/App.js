import React from 'react';
import logo from './logo.svg';
//import './App.css';
import DemoFunctionalComponent from'./demoFunctionalComponent.js'
import DemoClassComponent from './DemoClassComponent'
import Header from './components/Header.js'
import Cheader from './components/Cheader.js'
import Channel from './components/Channel.js'
import FunctionClick from './components/FunctionClick.js'
import CFunctionClick from './components/CFunctionClick.js'
import Columns from './components/Columns';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline.js'
import './appStyle.css';
import Style from './appStyle.module.css';
import Form from './components/Form.js';
import Routing from './components/Routing.js'
import LifeCycleA from './components/LifeCycleA';
import Product from './components/Product';
import Postlist from './components/Postlist';
import PostForm from './components/PostForm.js'
import CounterAddNDiffFea from './components/CounterFunc.js'
import Hookobject from './components/Hookobject';
import Hookarray from './components/Hookarray';
import ClassCounterOne from './components/ClassCounterOne.js'
import MouseControl from './components/MouseControl';
import CMouseControl from './components/CMouseControl';
import A from './components/A.js'
import Ajay from './components/Ajay'
import Sushant from './components/Sushant'
import Vikas from './components/Vikas'
import Timer from './components/Timer';
import Hero from './components/Hero';
// import ErrorBoundary from './components/ErrorBoundary.js'
import DemoErrorLibrary from './components/DemoErrorLibrary.js'
import {ErrorBoundary} from 'react-error-boundary';
import Fallback from './components/Fallback';
import ContComp from './components/ContComp';
import UnConCom from './components/UnConCom';
import ExampleuseMemo from './components/ExampleuseMemo'
function App() {
  const numbers=[3,4,5,6];
  const name={
    firstName:'Arpit',
    lastName:'Rituraj'
  }
  const errorHandle=(error,errorInfo)=>{
    console.log(error,errorInfo);
  }
  return <div> 
      {/* <h1 className='error'>This is error css</h1>
      <h1 className={Style.success}>This is success css</h1>  */}
  {/* <DemoFunctionalComponent/>
  <DemoClassComponent/>
  <Header name="Arpit" last="Rituraj">
     <p>Hi, I am child components</p>
     <strong>I am also a child</strong>
  </Header>
  <Cheader name="Anita" last="Kumari">
    <p>I am child of class components</p>
    <p>I am second class components</p>
  </Cheader>
  <Channel/>
  <FunctionClick/>
  <CFunctionClick years="4" number={numbers}/>
  <table>
    <tbody>
      <tr>
         <Columns/>
      </tr>
    </tbody>
  </table> */}
  {/* <Stylesheet isValue={false}/>
  <Inline/> */}
{/* <Form/> */}
  {/* <Routing/> */}
  {/* <LifeCycleA/> */}
 {/* <Product/> */}
 {/* <Postlist/> */}
 {/* <PostForm/> */}
 {/* <CounterAddNDiffFea/> */}
 {/* <Hookobject/> */}
 {/* <Hookarray/> */}
 {/* <ClassCounterOne/> */}
 {/* <MouseControl/>
 <CMouseControl/> */}
 {/* <A/> */}
 {/* <Ajay/>
 <Sushant/>
 <Vikas/> */}
 {/* <Timer/> */}
 {/* <ErrorBoundary>
 <Hero heroName='Batman'/>
 </ErrorBoundary>
 <ErrorBoundary>
 <Hero heroName='SuperMAn'/>
 </ErrorBoundary>
 <ErrorBoundary>
 <Hero heroName='Joker'/>
 </ErrorBoundary> */}
  {/* <ErrorBoundary FallbackComponent={Fallback} onError={errorHandle}>
 <DemoErrorLibrary fullName={name}/> */}
 {/* <DemoErrorLibrary fullName={{}}/> */}
{/* </ErrorBoundary> */}
 {/* <ContComp/>
 <UnConCom/> */}
 {/* <ExampleuseMemo/> */}
  </div>
}

export default App;
