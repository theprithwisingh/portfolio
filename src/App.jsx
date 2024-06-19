import './App.css'
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar'
import Projects from './Components/Skills/Project';

function App() {
  return (
    <div className='App' id='App'>
        <Navbar/>
        <div id='hero-section'><Hero/></div>
        <div id='projects-container'><Projects/></div>
        <div id='form-container'><Contact/></div>
        <Footer/>
    </div>
  )
}

export default App;

