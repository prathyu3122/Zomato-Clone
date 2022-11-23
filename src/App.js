import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import {Routes, Route} from 'react-router-dom';

import Home from './components/Home';
import OrderOnline from './components/OrderOnline';
import Hyderabad from './components/Hyderabad';
import Mumbai from './components/Mumbai';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order-online" element={<OrderOnline />} />
        <Route path="/order-online/Hyd-restos" element={<Hyderabad />} />
        <Route path="/order-online/Mum-restos" element={<Mumbai />} />
        <Route path="order-online/Hyd-restos/Cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
