import './App.css';
import About from './Components/About';
import Clients from './Components/Clients';
import Contact from './Components/Contact';
import Count from './Components/Count';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Portofolio from './Components/Portofolio';
import Service from './Components/Service';
import Team from './Components/Team';
import Testimonials from './Components/Testimonials';
import Why_us from './Components/Why_us';

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <main id='main'>
        <Clients/>
        <About/>
        <Count/>
        <Why_us/>
        <Service/>
        <Portofolio/>
        <Testimonials/>
        <Team/>
        <Contact/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
