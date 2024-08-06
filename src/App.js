import './App.css';
import { Routes, Route } from 'react-router-dom';
import FrontendLayout from './layouts/FrontendLayout';
import Contact from './pages/Contact';
import Category from './pages/Category';
import Items from './pages/Items';
import Home from './pages/Home';
function App() {
  return (

    // <FrontendLayout>
   <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Category" element={<Category />} />
        <Route path="/Items" element={<Items />} />
        

      </Routes>
    {/* </FrontendLayout> */}
    </>
  );
}

export default App;
