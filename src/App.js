
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Footer from './component/Footer/Footer';
import Header from './component/Home/Header/Header';
import Answer from './component/Answer/Answer';
import Register from './component/Register/Register';
import AllProduct from './component/AllProduct/AllProduct';
import RequeirAuth from './component/RequeirAuth/RequeirAuth';
import AddData from './component/AddData/AddData';
import UserId from './component/UserId/UserId';
import MyProducts from './component/MyProducts/MyProducts';
import NotFound from './component/NotFound/NotFound';



function App() {
  return (
    <div className="">
 
<Header></Header>

   <Routes>
     <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route> 
      
      <Route path='/product/:id' element={
      <RequeirAuth><UserId></UserId></RequeirAuth>
      }></Route> 





     <Route path='/manageitem' element={

    <RequeirAuth> <AllProduct></AllProduct></RequeirAuth>
    }></Route>
     <Route path='/adddata' element={
     <RequeirAuth><AddData></AddData></RequeirAuth>
     }></Route>
     <Route path='/answer' element={<Answer></Answer>}></Route>
    
     <Route path='/login' element={<Login></Login>}></Route>
     <Route path='/myitem' element={<RequeirAuth><MyProducts></MyProducts></RequeirAuth>}></Route>
     <Route path='/register' element={<Register></Register>}></Route>
     <Route path='*' element={<NotFound></NotFound>}></Route>

   </Routes>


<Footer></Footer>
   
    </div>
  );
}

export default App;
