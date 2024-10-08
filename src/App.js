import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Nav} from './components/nav';
import { Shop } from './pages/shop/shop';
import { Cart } from './pages/cart/cart';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/cart' element={<Cart/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
