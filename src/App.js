import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import { Navbar } from './components/navBar/NavBar';
import {Header} from './components/header/header';
import {Clicker} from './components/Clicker/Clicker';
import { ItemListContainer } from './components/itemListContainer/ItemListContainer';

function App() {

  
  return (
    <>                      
     

    <Header />
    
    <Router>
      <Navbar/>
    </Router>
    <ItemListContainer greeting=" Mundo Informatico"/>
    <Clicker/>
    </>
  );
}

export default App;
