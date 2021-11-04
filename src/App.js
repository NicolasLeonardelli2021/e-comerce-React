import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import { Navbar } from './components/navBar/NavBar';
import {Header} from './components/header/header';

function App() {
  return (
    <>                      
     
    <Header />
 
    <Router>
      <Navbar/>
    </Router>
    </>
  );
}

export default App;
