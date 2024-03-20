import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Slidersec from './components/Slidersec';
import Gamesec from './components/Gamesec';
import Levelsec from './components/Levelsec';
import Movesec from './components/Movesec';
import World from './components/World';
import Behind from './components/Behind';
import Next from './components/Next';
import Roadmap from './components/Roadmap';
import Form from './components/Form';
import Footer from './components/Footer';
import Backtop from './components/Backtop';
import Preloader from './components/Preloader';
import { useState, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [data, setdata] = useState(false);
  useEffect(() => {
    setdata(true);
    setTimeout(() => {
      setdata(false);
    }, 4000);
  }, []);
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      easing: "linear",
    });
  }, []);
  return (
    <div>
      {data ? (
        <div>
          <Preloader />
        </div>
      ) : (
        <div className="App bg-black">
          <div className='overflow-x-hidden bg-black'>
            <Header />
            <Slidersec />
            <Gamesec />
            <Levelsec />
            <Movesec />
            <World />
            <Behind />
            <Next />
            <Roadmap />
            <Form />
            <div className='overflow-hidden'>
              <Footer />
            </div>
            <Backtop />
          </div>
        </div>
      )}
    </div>
  )
}

export default App;
