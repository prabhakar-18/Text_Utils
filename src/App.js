import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);


  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showalert("Dark mode has been enabled", "success");
      
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'orange';
      showalert("Light mode has been enabled", "success");
      // document.title = "light mode on";
    }
  }

  return (
    <>
      <Router>
        <Navbar tittle="TextUtils" mode={mode} toogleMode={toggleMode} />
        <Alert alert={alert} />
        {/* <About mode={mode}/> */}
        <div className="container my-1"> 
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />}>
            </Route>
            <Route exact path="/" element={<TextForm showalert={showalert} heading="Entre the text to analyze" mode={mode} />}>
            </Route>
          </Routes>
        </div>
      </Router>
    </>

  );
}

export default App;
