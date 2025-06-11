// import './App.css'
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { createContext, useContext, useState } from "react";

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
}

export let userContext = createContext();
export default App;
