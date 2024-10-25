import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Nav} from './components/nav';
import { Shop } from './pages/shop/shop';
import { Cart } from './pages/cart/cart';
import MenuBar from './components/menuBar';
import StoryCarousel from "./pages/story bar/storyBar"
import '@fortawesome/fontawesome-free/css/all.min.css';
import HomeSlider from './pages/mainHomeSlider/homeSlider';
import StoryBarMiddle from './pages/story bar/storyBarMiddle';


function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <MenuBar/>
        <StoryCarousel/>
        <HomeSlider/>
        <StoryBarMiddle/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/cart' element={<Cart/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
