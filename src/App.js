import './App.css';
import NavBar from './Components/navBar';
import HeroBanner from './Components/HeroBanner';
import AboutUs from './Components/aboutus';
import WhatWeDo from './Components/WhatWeDo';
import Reviews from './Components/Reviews'
import Package from './Components/package';

function App() {
  return (
    <div className="App">
      
      <NavBar />
      <HeroBanner />
      <AboutUs />
      <WhatWeDo />
      <Package />
      <Reviews />
      
    </div>
  );
}

export default App;
