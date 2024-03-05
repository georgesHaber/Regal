import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home';
import Privacy from './Privacy'
import Terms from './Terms';


function App() {
  return (
<BrowserRouter>
<Routes>
  <Route index element={<Home/>}/>
  <Route path='/Privacy' element={<Privacy/>}/>
  <Route path='/Terms' element={<Terms/>}/>
</Routes>
</BrowserRouter>
    
  );
}

export default App;
