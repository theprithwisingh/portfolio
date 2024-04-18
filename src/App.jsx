import './App.css'
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar'

function App() {
  return (
    <div className='App'>
        <Navbar/>
        <Hero/>

        <Contact/>

        <Footer/>
    </div>
  )
}

export default App;
