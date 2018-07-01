import React from 'react'
import './Sponsors.css'
import colgate from './colgate.png'
import oralB from './oral-b.png'
import { Link } from 'react-scroll'

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
        <div className={"sponsors__contact"}>
            <p>
                Quer ser um parceiro do CUBO? <br/>
                Mande uma <Link
                    activeClass="active"
                    to="contact"
                    offset={-120}
                    spy={true}
                    smooth={true}
                    duration={500}>
                    mensagem
                </Link> pra gente!
            </p>
        </div>
    </div>
)

export default Sponsors