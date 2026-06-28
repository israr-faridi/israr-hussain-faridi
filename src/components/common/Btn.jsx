import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

const Btn = ({ name, text, link, target, onclick }) => {
    return (
        <Link className={`mybtn ${name || ""}`} target={target} to={link || "/"} onClick={onclick} smooth>{text}</Link>
    )
}

export default Btn
