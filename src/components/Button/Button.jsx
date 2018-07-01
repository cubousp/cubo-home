import React from 'react'
import './Button.css'

const Button = ({ children, onClick }) => (
    <button
        type="button"
        className="button btn btn-primary"
        onClick={onClick}
    >
        {children}
    </button>
)

export default Button