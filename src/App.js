import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/Home';
import Contact from './pages/Contact';
import ProductPage from './pages/Product';
import { produtos } from './utils/data'

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/product/:id" element={<ProductPage products={produtos} />} />
            </Routes>
        </Router>
    );
}

export default App;
