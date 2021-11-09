import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import { Navbar } from './components/navBar/NavBar';
import {Header} from './components/header/header';
import {Clicker} from './components/Clicker/Clicker';

function App() {

  
  return (
    <>                      
     

    <Header />
    
    <Router>
      <Navbar/>
    </Router>
    
    <Clicker/>
    </>
  );
}

export default App;
