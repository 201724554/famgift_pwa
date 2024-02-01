import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Sub from './pages/Sub';
import Login from './pages/Login';

function App() {
  return (
      <Routes>
        <Route index element={<Main/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/sub" element={<Sub/>}/>
      </Routes>
  );
}

export default App;
