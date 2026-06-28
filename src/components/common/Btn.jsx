import React from 'react'
import { Link } from 'react-router-dom'

const Btn = ({ name,text, link, target, onclick  }) => {
    return (
        <Link className={`mybtn ${name}`} target={target} to={link} onClick={onclick}>{text}</Link>
    )
}

export default Btn
