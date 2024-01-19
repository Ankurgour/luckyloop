// import logo from './logo.svg';
// import GameHome from './Gamemode/pages/gamehome/gamehome';
// import SpinWheel from './Gamemode/pages/spinwheel/spinwheel';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// function App() {
//   return (
//     <div className="App">
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//       <GameHome/>
//       <SpinWheel/>
//     </div>
//   );
// }

// export default App;



import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GameHome from './Gamemode/pages/gamehome/gamehome';
import SpinWheel from './Gamemode/pages/spinwheel/spinwheel';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<GameHome />} />
          <Route path="/spin-wheel" element={<SpinWheel />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

