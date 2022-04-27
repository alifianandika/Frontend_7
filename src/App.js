
// import './App.css';
// import Hello from "./components/Hello";
// import Header from './components/Header';
// import Main from './components/Main';
// import Footer from './components/Footer';



import { BrowserRouter, Route, Routes } from "react-router-dom";
import Count from "./components/Count";
import Counter from "./components/Counter/Counter";
import Home from "./pages/Home";
import CreateMovie from "./pages/movie/Create";






function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>s
    // </div>

    // <div>
    //   <Hello />
    //    <Header />
    //     <Main />
    //       <Footer />

    // </div>


    <div>
        
       {/* <Count /> */}
    
    <BrowserRouter>
        <Home /> 
       
 
    
    </BrowserRouter>

  

    {/* <Routes>
      <Route path="/" element={<Home />}/>
    </Routes>
          */}
  
  
       
            
        
        {/* <Counter /> */}
    </div>

  );
}

export default App;
