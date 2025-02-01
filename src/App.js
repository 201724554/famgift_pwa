import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Main from './pages/Main';
import Sub from './pages/Sub';
import Login from './pages/Login';
import { useEffect } from 'react';
import { isEmpty, getCookie } from './common/Util';
import Header from './pages/Header';

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
  useEffect(()=>{
    console.log("app.js")
  })

  return (
      <Routes>
        <Route index element={<Main/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/sub" element={<Sub/>}/>
        <Route path="/header" element={<Header/>}/>
      </Routes>
  );
}

export default App;
