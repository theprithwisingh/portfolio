import './App.css'
// import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar'
import Projects from './Components/Skills/Project';

function App() {
  return (
    <div className='App'>
        <Navbar/>
        <Hero/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App;
