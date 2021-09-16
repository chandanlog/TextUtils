//import React from 'react'
//import PropTypes from 'propTypes'

export default function Navbar (props){

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
  <a className="navbar-brand" href="/">{props.title}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="/">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">{props.aboutText}</a>
      </li>
      
    </ul>
  </div>
  </div>
</nav>
  )
}

// Navbar.propsTypes = {
//   title: PropTypes.string.isRequired,
//   aboutText: PropTypes.string.isRequired
// }

// Navbar.defaultProps = {
//   title: 'Set title here',
//   aboutText: 'About'
// };