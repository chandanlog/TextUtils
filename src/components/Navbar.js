import React from "react";
import PropTypes from 'prop-types'

export default function Navbar(props) {

 console.log(props,'props')
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
      <li className="nav-item active">
        <a className="nav-link active" href="/">{props?.about?.Text}</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">About</a>
      </li>
      
    </ul>
    {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
    </form> */}
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}  style = {{width:"17%"}}>
      
      <input className="form-check-input" type="checkbox" style = {{float:"right"}} id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
   
      <label className="form-check-label" htmlfor="flexSwitchCheckDefault" >Enable darkMode</label>
    </div>
  </div>
  </div>
</nav>
  )
}
Navbar.propTypes= {
  title: PropTypes.string.isRequired,
  aboutText:PropTypes.string.isRequired
}
Navbar.defaultProps={
  title:'set title here',
  aboutText:'About'
};