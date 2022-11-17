// import logo from './assets/cat-meme.png';
import './App.css';
// import Component 
import TrendingGame from './components/TrendingGame';
import Intro from './components/Intro';
import BestGame from './components/BestGame';
import NavBar from './components/NavigationBar';
import Footer from './Footer';

import './style/landingPage.css';

const App = () => {
  return (
    <div>
      <div className="myBG">
        <NavBar />
        <Intro />
      </div>
 
    <div className="trending">
      <TrendingGame />
    </div>
    
    <div className="best">
      <BestGame />
    </div>

    <div className="trending">
      <Footer />    
    </div>

    </div>
  );
}

export default App;


// <div className="App">
//       <header className="App-header">
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
//           Learn React Cui
//         </a>
//       </header>
//       <Intro />
//       <TrendingGame />
//       <BestGame />
//       <NavBar />
//     </div>