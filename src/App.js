import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router-dom';


function App() {
  return (
<>
<Routes>
<Route path='/' element={<Navbar/>}>
      <Route index element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/about' element={<Fac />}/>
      <Route path='/about' element={<Acad/>}/>
</Route>
</Routes>

</>
  );
}

export default App;
