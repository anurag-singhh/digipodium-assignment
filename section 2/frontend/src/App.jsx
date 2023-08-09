import {BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Navbar from './components/Navbar';
import EventHandling from './components/EventHandling';
import StateManagement from './components/StateManagement';
import TodoList from './components/TodoList';
import ProductList from './components/ProductList';


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
        <Route element={<StateManagement /> } path ='statemanagement' /> 
        <Route element={<TodoList /> } path ='todo' /> 
        <Route element={<ProductList /> } path ='list' /> 

      </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
