import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav>
            <div className="container">
                <div className="navWrapper">
                    <div className="nav-left">
                        <h3>israrfaridi</h3>
                    </div>
                    <div className="nav-right">
                        <Link><i className="ri-github-fill"></i></Link>
                        <Link><i className="ri-facebook-circle-fill"></i></Link>
                        <Link><i className="ri-linkedin-box-fill"></i></Link>
                        <Link><i className="ri-instagram-line"></i></Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header
