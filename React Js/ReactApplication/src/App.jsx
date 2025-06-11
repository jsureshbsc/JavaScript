// import './App.css'

import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { createContext, useContext, useState } from "react";
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import ChangingName from './components/ChangingName';



function App() {
  let [user, setUser] = useState({
    name: "suresh",
    age: 23,
    email: "suresh@gmail.com",
  });
  return (
    <>
      <userContext.Provider value={{ user }}>
        <div className="app">
          <Header />
          <Content />
          <Footer />
        </div>
      </userContext.Provider>
    </>
  );
   <>
    
    <div className='app'>
    <Header userName={userName}/>
    <Content/>
    <ChangingName/>
    <Footer/>
    </div>
   </>
  )
}

export let userContext = createContext();
export default App;
