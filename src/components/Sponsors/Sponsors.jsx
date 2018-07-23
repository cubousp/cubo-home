import React from 'react'
import './Sponsors.css'
import dentsply from './dentsply.png'
import fgm from './fgm.png'
import morelli from './morelli.png'
import odontoPrev from './odonto-prev.png'
import quinelato from './quinelato.png'
import septodont from './septodont.png'
import sis from './sis.png'
import tdv from './tdv.png'
import valda from './valda.png'
import { Link } from 'react-scroll'

const Sponsors = () => (
    <div className="sponsors">
        <div className="sponsors__header">
            <h1>Nossos parceiros</h1>
        </div>
        <div className="sponsors__grid">
            <div className="sponsors__grid__card">
                <a href="http://www.dentsply.com.br" target="_blank" rel="noopener noreferrer">
                    <img alt="sponsor" src={dentsply} className="grow"/>
                </a>
            </div>
            <div className="sponsors__grid__card">
                <a href="http://www.fgm.ind.br/site/" target="_blank" rel="noopener noreferrer">
                    <img alt="sponsor" src={fgm} className="grow"/>
                </a>
            </div>
            <div className="sponsors__grid__card">
                <a href="https://www.morelli.com.br/" target="_blank" rel="noopener noreferrer">
                    <img alt="sponsor" src={morelli} className="grow"/>
                </a>
            </div>
            <div className="sponsors__grid__card">
                <a href="http://www.odontoprev.com.br/" target="_blank" rel="noopener noreferrer">
                    <img alt="sponsor" src={odontoPrev} className="grow"/>
                </a>
            </div>
            <div className="sponsors__grid__card">
                <a href="https://www.quinelato.com.br" target="_blank" rel="noopener noreferrer">
                    <img alt="sponsor" src={quinelato} className="grow"/>
                </a>
            </div>
            <div className="sponsors__grid__card">
                <a href="http://www.septodont.com.br/" target="_blank" rel="noopener noreferrer">
                    <img alt="sponsor" src={septodont} className="grow"/>
                </a>
            </div>
            <div className="sponsors__grid__card">
                <a href="http://www.sisconsultoria.net/" target="_blank" rel="noopener noreferrer">
                    <img alt="sponsor" src={sis} className="grow"/>
                </a>
            </div>
            <div className="sponsors__grid__card">
                <a href="http://www.tdv.com.br/" target="_blank" rel="noopener noreferrer">
                    <img alt="sponsor" src={tdv} className="grow"/>
                </a>
            </div>
            <div className="sponsors__grid__card">
                <a target="_blank" rel="noopener noreferrer">
                    <img alt="sponsor" src={valda} className="grow"/>
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