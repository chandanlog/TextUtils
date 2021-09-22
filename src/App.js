// import './App.css';


// function App() {
//   return (
//     <>
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//   <a className="navbar-brand" href="/">Textutils</a>
//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>

//   <div className="collapse navbar-collapse" id="navbarSupportedContent">
//     <ul className="navbar-nav mr-auto">
//       <li className="nav-item active">
//         <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="/">About</a>
//       </li>
      
//     </ul>
//     <form className="form-inline my-2 my-lg-0">
//       <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
//       <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//     </form>
//   </div>
// </nav>
//     </>
//   );
// }

import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
import React, { useState } from 'react';
import Alert from './components/Alert';


function App(){
const [mode, setMode] = useState('light');
const [alert, setAlert] = useState(null);

const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
}
const toggleMode = ()=>{
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor ='#2f4668';
    showAlert("Dark mode has been enabled","success");
  }
  else{
    setMode('light');
    document.body.style.backgroundColor ='white';
    showAlert("Light mode has been enabled","success");
  }
}


  return(
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} about = "text"/>
      <Alert alert={alert}/>
      <div className="container">
      <TextFrom showAlert={showAlert} heading="Enter the text to Analysis Below" mode={mode}/>
      {/* <About/> */}
      </div>
    </>
  );
}
export default App;