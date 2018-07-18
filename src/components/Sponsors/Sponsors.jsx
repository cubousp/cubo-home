import React from 'react'
import './Sponsors.css'
import septodont from './logo_septodont.png'
import quinelato from './logo_quinelato.jpg'
import sisconsultoria from './logo_sis_consultoria.png'
import tdv from './logo_tdv.png'
import { Link } from 'react-scroll'

const Sponsors = () => (
    <div className="sponsors">
        <div className="sponsors__header">
            <h1>Nossos parceiros</h1>
        </div>
        <div className="sponsors__grid">
            <div className="sponsors__grid__card">
                <a href="http://www.septodont.com.br/" target="_blank" rel="noopener noreferrer">
                    <img alt="sponsor" src={septodont} className="grow"/>
                </a>
            </div>
            <div className="sponsors__grid__card">
                <a href="https://www.quinelato.com.br/" target="_blank" rel="noopener noreferrer">
                    <img alt="sponsor" src={quinelato} className="grow"/>
                </a>
            </div>
            <div className="sponsors__grid__card">
                <a href="http://www.sisconsultoria.net/" target="_blank" rel="noopener noreferrer">
                    <img alt="sponsor" src={sisconsultoria} className="grow"/>
                </a>
            </div>
            <div className="sponsors__grid__card">
                <a href="http://www.tdv.com.br/" target="_blank" rel="noopener noreferrer">
                    <img alt="sponsor" src={tdv} className="grow"/>
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