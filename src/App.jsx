import React from 'react';
import './App.css'
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Project from './Pages/Project/Project';

function App() {
  return (
    <div className='app'>
      <Navbar/>
      <Home/>
    </div>
  );
}
export default App;


