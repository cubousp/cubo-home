import React from 'react'
import './Button.css'

const Button = ({ children }) => (
    <button
        type="button"
        className="button btn btn-primary"
    >
        {children}
    </button>
)

export default Button