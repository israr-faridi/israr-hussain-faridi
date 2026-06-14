import React from 'react'
import { Link } from 'react-router-dom'

const Btn = ({ text, link , target}) => {
    return (
        <Link className='mybtn' target={target} to={link}>{text}</Link>
    )
}

export default Btn
