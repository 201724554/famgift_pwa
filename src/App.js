import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Main from './pages/Main';
import Sub from './pages/Sub';
import Login from './pages/Login';
import { useEffect } from 'react';
import { isEmpty, getCookie } from './common/Util';
import Header from './pages/Header';
import CouponRegister from './pages/coupon/CouponRegister';


function App() {
  const navigate = useNavigate();
  /*
  if logged in -> render Main
  else redirect to loggin page
  */ 
  useEffect(() => {
    const cookieMap = getCookie();
    if(isEmpty(cookieMap.get("login"))) {
      //redirect to Login
      //navigate("/login");
    }
  },[]);

  return (
      <Routes>
        <Route index element={<Main/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/sub" element={<Sub/>}/>
        <Route path="/header" element={<Header/>}/>
        <Route path="/register" element={<CouponRegister/>}/>
      </Routes>
  );
}

export default App;
