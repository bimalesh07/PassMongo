import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Manager from './component/Manager'
import Footer from './component/Footer';

function App() {
  return (
    <>
      <Navbar />
      <div className='min-h-[87vh]'>
        <Manager />
      </div>

      <Footer />
    </>
  );
}

export default App

// import { useState, useEffect } from 'react'
// import './App.css'
// import Navbar from './component/Navbar'
// import Manager from './component/Manager'
// import Footer from './component/Footer';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [showSignup, setShowSignup] = useState(false);

//   useEffect(() => {

//   return (
//     <>
//       <Navbar />
//       <div className='min-h-[87vh]'>
//         <Manager />
//       </div>
//       <Footer />

//     </>
//   );

// export default App
