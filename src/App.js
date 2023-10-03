import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Components/Home';
import {Routes ,Route} from 'react-router-dom';
import Cristiano from './Components/Ronadlo/Cristiano';
 import Lionel from './Components/Messi/Lionel'
 import Neymar from './Components/Neymar/Neymar'
import About from './Components/Notes/About';

function App() {
  return (
    <div className="App">
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/ronaldo' element={<Cristiano/>} />
    <Route path='/messi' element={<Lionel />} />
    <Route path='/neymar' element={<Neymar />} />
    </Routes>
    <br />
   
      
    </div>
  );
}

export default App;
