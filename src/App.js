import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Navbar } from './components/navBar/NavBar';
import {Header} from './components/header/header';
import { ItemListContainer } from './components/itemListContainer/ItemListContainer';
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer'
import { CartView } from './components/CartView/CartView';
import {Navigate} from 'react-router-dom'
import { CartProvider } from './components/context/CartContext';



function App() {

 
  return (
    <> 

    
        <CartProvider>  
     <BrowserRouter>
     <Header />
     <Navbar/>
   
    <Routes>
      <Route path="/" element={ <ItemListContainer/>}/>
      <Route path="/productos/:catId" element={<ItemListContainer/>}/> 
      <Route path="/detail/:itemId" element={<ItemDetailContainer/>}/>
      <Route path="/cart" element={<CartView/>}/>
      <Route path="*" element={<Navigate to="/"/>}/>
      
      
    </Routes>
  
     
     </BrowserRouter>    
     </CartProvider>    
    </>
    
  );
}

export default App;
