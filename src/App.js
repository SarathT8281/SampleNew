
import './App.css';
import Exsternal from './Exsternal';
import InternalStyle from './InternalStyle';
import New from './New';
import Sample from './Sample';
import Test from './Test';
import Task from './Task';
import Comoonents1 from './Comoonents1';
import Task4 from './Task4';
import Components2 from './Components2';
import CompArray from './CompArray';
import CardWithMap from './CardWithMap';
import CarouselWithMap from './CarouselWithMap';
import TablewithMap from './TablewithMap';
import New1 from './New1';
import Props from './Props';
import Ternary from './Ternary';
import UseEffect from './Task1/UseEffect';
import Task10 from './Task2/Task10';
import Task11 from './Task11/Task11';
import Task11Ternary from './Task11/Task11Ternary';
import Useeffect2 from './UseEffect2/Useeffect2';
import Dummyapi from './DummyApi/Dummyapi';
import DummyapiBrw from './DummyApi/DummyapiBrw';
import Cardapi from './DummyApi/Cardapi';
import About from './UseContext/About';
import SpreadSample from './SpreadSample/SpreadSample';
import TrialAxios from './DummyApi/CarouselCard';
import SpreadTask1 from './SpreadSample/SpreadTask1';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import UseParams from './UseParams/UseParams';
import Login from './Login';
import RegisterForm from './RegisterForm';
import ReactConnect from './ReactConnect';
import SpreadTest from './Test/SpreadTest';

function App() {
  return (
    <div className="App">

     <BrowserRouter>
     <Routes>

      {/* <Route path='/' element={<Sample/>}/>
      <Route path='/new' element={<><Components2/><CompArray/></>}/> */}

     
      {/* <Route path='/' element={<Navigation/>}/>  */}
     {/* <Route path='/CompArray' element={<New/>}/>
     <Route path='/home' element={<CompArray/>}/> */}
 
     {/* <Route path='/new/:username' element ={<UseParams/>}/> */}

     </Routes>

     
     
     
     </BrowserRouter>


       
        {/* <Test/>
      <Sample/>
      <New/>
      <Exsternal/>  
      <InternalStyle/> 
      <Task/>  
     <Comoonents1/>   */}
      <Task4/> 
    {/* <Components2/> 
     <CompArray/> 
     <CardWithMap/> 
     <CarouselWithMap/>
     <TablewithMap/>
     <New1/> 
     <Props/> 
    <Ternary/>   */}
     {/* <UseEffect/>   */}
     {/* <Task10/>  */}
      {/* <Task11/>
      <Task11Ternary/>  
       */}
       {/* <Useeffect2/> */}
       {/* <Dummyapi/> */}
       {/* <DummyapiBrw/> */}
       {/* <Cardapi/> */}
       {/* <TrialAxios/> */}
       {/* <About/> */}
       {/* <SpreadSample/> */}
       {/* <SpreadTask1/> */}
       {/* <Login/> */}
       {/* <RegisterForm/> */}
       {/* <ReactConnect/> */}
       {/* <SpreadTest/> */}

    </div>
  );
}

export default App;
