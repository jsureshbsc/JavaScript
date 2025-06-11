import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import ChangingName from "./components/ChangingName";

// Create and export the context
export const userContext = React.createContext();

function App() {
  let userName = "suresh";

  return (
    <>
      <ChangingName />
    </>
  );
}

export default App;
