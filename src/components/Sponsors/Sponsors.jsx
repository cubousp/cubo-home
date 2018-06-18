import React from 'react'
import './Sponsors.css'
import colgate from './colgate.png'
import oralB from './oral-b.png'

const Sponsors = () => (
    <div className="sponsors">
        <div className="sponsors__header">
            <h1>Nossos parceiros</h1>
        </div>
        <div className="sponsors__grid">
            <div className="sponsors__grid__card">
                <a href="https://www.colgate.com.br/" target="_blank" rel="noopener noreferrer">
                    <img alt="sponsor" src={colgate} className="grow"/>
                </a>
            </div>
            <div className="sponsors__grid__card">
                <a href="https://oralb.com.br/pt-br" target="_blank" rel="noopener noreferrer">
                    <img alt="sponsor" src={oralB} className="grow"/>
                </a>
            </div>
            <div className="sponsors__grid__card">
                <a href="https://www.colgate.com.br/" target="_blank" rel="noopener noreferrer">
                    <img alt="sponsor" src={colgate} className="grow"/>
                </a>
            </div>
            <div className="sponsors__grid__card">
                <a href="https://oralb.com.br/pt-br" target="_blank" rel="noopener noreferrer">
                    <img alt="sponsor" src={oralB} className="grow"/>
                </a>
            </div>
            <div className="sponsors__grid__card">
                <a href="https://www.colgate.com.br/" target="_blank" rel="noopener noreferrer">
                    <img alt="sponsor" src={colgate} className="grow"/>
                </a>
            </div>
            <div className="sponsors__grid__card">
                <a href="https://oralb.com.br/pt-br" target="_blank" rel="noopener noreferrer">
                    <img alt="sponsor" src={oralB} className="grow"/>
                </a>
            </div>
        </div>
    </div>
)

export default Sponsors