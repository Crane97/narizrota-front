import './App.css';
import UserForm from './pages/userForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './pages/navbar';
import Home from './pages/home';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<UserForm />} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
