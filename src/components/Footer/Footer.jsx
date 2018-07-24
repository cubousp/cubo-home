import React from 'react'
import './Footer.css'
import Hidden from '@material-ui/core/Hidden';

const Footer = () => (
    <div>
        <Hidden mdDown>
            <div className="footer">
                <h4>
                    CUBO USP - Congresso Universitário Brasileiro de Odontologia da Universidade de São Paulo - © 2018 - Todos os direitos reservados
                </h4>
            </div>
        </Hidden>
        <Hidden mdUp>
            <div className="footer" style={{ marginTop: 32 }}>
                <h4 style={{
                    fontSize: 12,
                    lineHeight: '18px'
                }}>
                    CUBO USP © Todos os direitos reservados
                </h4>
            </div>
        </Hidden>
    </div>
)

export default Footer