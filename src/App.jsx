// import logo from './logo.svg';
import './css/App.css';
import { Routes, Route } from 'react-router-dom';
import Landing from './Components/Landing';
import ProductListing from './Components/ProductListing';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/products' element={<ProductListing/>} />
    </Routes>
  );
}

export default App;
