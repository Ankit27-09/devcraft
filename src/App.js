
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import About from './Pages/About';
import Fac from './Pages/Fac';
import Acad from './Pages/Acad';
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
<>
<Routes>
<Route path='/' element={<Navbar/>}>
      <Route index element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/facilities' element={<Fac />}/>
      <Route path='/academics' element={<Acad/>}/>
</Route>
</Routes>

</>
  );
}

export default App;
