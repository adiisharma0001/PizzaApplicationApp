
import './App.css';
import Home from './screen/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './screen/Login'; 
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Signup from './screen/Signup';
import { CardProvider } from './components/ContextReducer';
// import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
// import '../node_modules/bootstrap-dark-5/dist/js/bootstrap.bundle';
// import '../node_modules/bootstrap-dark-5/dist/js/bootstrap.bundle.min.js';
function App() {
  return (
     // Wrap the div into Routers
    <CardProvider>
   
    <Router>
    <div>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/creatuser' element={<Signup/>}/>
      </Routes>
    </div>
    </Router>
    </CardProvider>
  );
}

export default App;
