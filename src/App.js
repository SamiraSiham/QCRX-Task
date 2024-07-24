// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landing from './Landing';
import ProductListing from './ProductListing';

function App() {
  return (
    <Routes>
      <Route path='/QCRX-Task' element={<Landing/>}/>
      <Route path='/QCRX-Task/products' element={<ProductListing/>} />
    </Routes>
  );
}

export default App;
