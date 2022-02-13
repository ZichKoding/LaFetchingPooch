import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './App.css';
import Homepage from './pages/Homepage';

function App() {
  return (
    <>
    <Nav />
    <Homepage></Homepage>
    <Footer />
    </>
  );
}

export default App;
