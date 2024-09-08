import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import About from './Components/About';
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,  // Updated from Switch
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')    // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    // setTimeout(() => {
    //   setAlert(null)
    // }, 2000);  // Ensure alert disappears after 2 seconds
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#363647';
      showAlert("Dark mode is enabled", "success")
      document.title = 'TextUtils - Dark mode'
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled", "success")
      document.title = 'TextUtils - Light mode'
    }
  }

  return (
    <>
      {/* <Navbar title="TextUtils" about="About-TextUtils" /> */}
      {/* <Navbar/> */}
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path="/about">
              <About />
            </Route> */}
            {/* <Route exact path="/"> */}
              <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
            {/* </Route> */}
          {/* </Routes> */}
        </div>
      {/* </Router > */}
    </>
  );
}
export default App;