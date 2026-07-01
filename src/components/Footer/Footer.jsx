import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer_data">

          <h4>israrfaridi</h4>
          <div className="footerIcon">
            <Link to={"https://github.com/israr-faridi"} target='_blank'><i className="ri-github-fill"></i></Link>
            <Link to={"https://web.facebook.com/israr.faridi.90"} target='_blank'><i className="ri-facebook-circle-fill"></i></Link>
            <Link to={"https://www.linkedin.com/in/israr-hussain-faridi-8a8b0225a/"} target='_blank'><i className="ri-linkedin-box-fill"></i></Link>
            <Link to={"https://www.instagram.com/israr_faridi/"} target='_blank'><i className="ri-instagram-line"></i></Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
