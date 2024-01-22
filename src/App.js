import React from 'react'
import Data from './components/data/Data';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Cloud from './components/cloud/Cloud'
import Footer from './components/footer/Footer';
import SignIn from './components/signIn/SignIn';
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Data />
      <Cloud />
      <Footer />
      {/* <SignIn /> */}
    </>
  );
}

export default App;
