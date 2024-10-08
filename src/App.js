import './App.css'
import Checkout from './Checkout';

import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router , Routes , Route , Navigate} from 'react-router-dom';
import Login from './Login';

function App() {
  return (
    <div className='App' >

     <Router>
        <Routes>
          {/* Default Route to Redirect to Login */}
          <Route path="/" element={<Navigate to="/login" />} />

          {/* Login Route */}
          <Route path="/login" element={<Login />} />

          {/* Checkout Route */}
          <Route path="/checkout" element={<div><Header /> <Checkout /></div>} />

          {/* Home Route */}
          <Route path="/home" element={<div><Header /> <Home/></div>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
