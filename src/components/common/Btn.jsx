import React from 'react'
import { Link } from 'react-router-dom'

const Btn = ({ text, link }) => {
    return (
        <Link className='mybtn' to={link}>{text}</Link>
    )
}

export default Btn
