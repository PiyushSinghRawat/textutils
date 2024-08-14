import "./App.css";
// import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState('');

  const showMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#03213e";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      <Navbar
        mode={mode}
        showMode={showMode}
        name="TextUtils"
        about="About US"
        home="home"
      />
      <Alert alert={alert} />

{/* <Routes>
  <Route exact path='/about' element={<About  mode={mode} />} /> 
  <Route exact path='/' element={<TextForm showAlert={showAlert} heading="TextUtils" mode={mode} />} /> 

</Routes> */}

<TextForm showAlert={showAlert} heading="TextUtils" mode={mode} />
    </> 

  );
}

export default App;
