import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer_data">

          <h4>israrfaridi</h4>
          <div className="footerIcon">
            <Link><i className="ri-github-fill"></i></Link>
            <Link><i className="ri-facebook-circle-fill"></i></Link>
            <Link><i className="ri-linkedin-box-fill"></i></Link>
            <Link><i className="ri-instagram-line"></i></Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
