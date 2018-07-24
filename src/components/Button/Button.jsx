import React from 'react'
import './Button.css'
import Hidden from '@material-ui/core/Hidden';

const Button = ({ children, onClick }) => (
    <div>
        <Hidden mdDown>
            <button
                type="button"
                className="button btn btn-primary"
                onClick={onClick}
            >
                {children}
            </button>
        </Hidden>
        <Hidden mdUp>
            <button
                type="button"
                className="button btn btn-primary"
                onClick={onClick}
                style={{
                    fontSize: 14,
                    height: 60,
                    padding: '0 18px',
                    minWidth: 180,
                    fontWeight: 600
                }}
            >
                {children}
            </button>
        </Hidden>
    </div>
)

export default Button