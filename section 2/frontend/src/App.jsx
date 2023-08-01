import {BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Navbar from './components/Navbar';
import EventHandling from './components/EventHandling';


function App() {
  return (
    <div>
      <BrowserRouter>
      {/* <Link to='/home'>Home</Link>
       <Link to='/signup'>Signup</Link>
  <Link to='/login'>Login</Link>*/}

       <Navbar />
       

      <Routes>
        <Route element={<Home/> } path ='/' /> 
        <Route element={<Home/> } path ='home' /> 
        <Route element={<Signup/> } path ='signup' /> 
        <Route element={<Login/> } path ='login' /> 
        <Route element={<EventHandling /> } path ='event' /> 

      </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
