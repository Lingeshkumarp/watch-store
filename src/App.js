//import './App.css';
import Login from './Login';
import HomePage from './HomePage';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Signup from './Signup';
import Cart from './Cart';
import Payment from './Payment';
import Final from './Final';

function App() {
  return (
     <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/homepage' element={<HomePage/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route> 
      <Route path='/payment' element={<Payment/>}></Route>
      <Route path='/final' element={<Final/>}></Route>
    </Routes>
    </BrowserRouter>
  
    {/* <Payment/> */}
       </>  
  );
}

export default App;