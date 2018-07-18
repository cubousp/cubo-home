import React from 'react'
import './Expo.css'
import Button from '../Button/Button'
import cadeira from './cadeira.png'

const Expo = () => (
    <div className="expo">
        <div className="expo__header">
            <h1>
                Exposição de <br/>
                Painéis Científicos
            </h1>
        </div>
        <div className="expo__content">
            <div className="expo__content-judging">
                <span>Para alunos da graduação e pós graduação</span>
                <div>
                    <ul>
                        Com banca avaliadora formada por<br/>
                        professores da USP nas categorias:
                    </ul>
                    <li>
                        <h4>Clínico</h4>
                    </li>
                    <li>
                        <h4>Social</h4>
                    </li>
                    <li>
                        <h4>Básico</h4>
                    </li>
                    <li>
                        <h4>
                            Ensaios <br/>
                            Biomecânicos
                        </h4>
                    </li>
                </div>
            </div>
            <div className="expo__content-prizes">
                <ul>
                    <span>
                        Com prêmios para os melhores colocados <br/>
                        em cada categoria.
                    </span>
                    <li>
                        <div>
                            <h4>1º lugar</h4>
                            <span>Cadeira XYZ com XPTO</span>
                        </div>
                        <div>
                            <img alt="Prêmio 1º lugar" src={cadeira}/>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h4>2º lugar</h4>
                            <span>Cadeira XYZ com XPTO</span>
                        </div>
                        <div>
                            <img alt="Prêmio 2º lugar" src={cadeira}/>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h4>3º lugar</h4>
                            <span>Cadeira XYZ com XPTO</span>
                        </div>
                        <div>
                            <img alt="Prêmio 3º lugar" src={cadeira}/>
                        </div>
                    </li>
                </ul>
            </div>
            <a 
                href="https://goo.gl/forms/snfrbfQcTO3pGJOM2" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="expo__content-button">
                    <Button>
                        Inscreva seu<br/>
                        trabalho
                    </Button>
            </a>
        </div>
    </div>
)

export default Expo