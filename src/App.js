import './App.css'
import Checkout from './Checkout';

import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';

function App() {
  return (
    <div className='App' >

    <Router>

      <Routes>

        <Route path="/checkout" element={<div><Header /> <Checkout /></div>} />
        {/* <Route path="/checkout" element={<Checkout />} /> */}

     
        
        <Route path="/" element={<div><Header /> <Home/></div>} />
        {/* <Route path="/" element={<Header />} />
        <Route path="/" element={<Home />} /> */}
          
      
      </Routes>

    </Router>


    </div>
  );
}

export default App;
