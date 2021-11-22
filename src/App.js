import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Navbar } from './components/navBar/NavBar';
import {Header} from './components/header/header';

import { ItemListContainer } from './components/itemListContainer/ItemListContainer';
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer'

function App() {

  
  return (
    <>                      
     <BrowserRouter>
     <Header />
     <Navbar/>
   
    <Routes>
      <Route path="/" element={ <ItemListContainer/>}/>
      <Route path="/detail/:itemId" element={<ItemDetailContainer/>}/>

      
      
    </Routes>
  
     
     </BrowserRouter>

    
    
   
    
    
    </>
  );
}

export default App;
