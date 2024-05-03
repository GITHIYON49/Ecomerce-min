import './App.css';
import { ViewCart,Home } from './pages';
import { productData } from './data/ProductData';
import { useState,createContext } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Navbar} from './components';

export const productContext = createContext();

function App() {
  const[product,setProduct] = useState(productData);
  const[cart,setCart]= useState([]);
  
  return (
    <productContext.Provider value={{product,setProduct,cart,setCart}}>
      <BrowserRouter>
      <Navbar/> 
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<ViewCart/>}/>
      </Routes>
      </BrowserRouter>
    
      </productContext.Provider>
  );
}

export default App;
