import React from 'react'
import './Expo.css'
import Button from '../Button/Button'
import Hidden from '@material-ui/core/Hidden';
// import cadeira from './cadeira.png'
// import fotopolimerizador from './fotopolimerizador.png'
import ScrollAnimation from 'react-animate-on-scroll'

const Expo = () => (
    <div>
        <Hidden mdDown>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={0}>
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
                            <div style={{ alignSelf: 'flex-end' }}>
                                <ul>
                                    Com banca avaliadora formada por professores da USP nas categorias:
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
                            {/*<ul>*/}
                                {/*<span>*/}
                                    {/*Confira alguns dos prêmios para os melhores colocados!*/}
                                {/*</span>*/}
                                {/*<li>*/}
                                    {/*<div>*/}
                                        {/*<h4>LEC Fotopolimerizador</h4>*/}
                                    {/*</div>*/}
                                    {/*<div>*/}
                                        {/*<img alt="Fotopolimerizador" src={fotopolimerizador}/>*/}
                                    {/*</div>*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                    {/*<div>*/}
                                        {/*<h4>Kit Dentsply</h4>*/}
                                    {/*</div>*/}
                                    {/*<div>*/}
                                        {/*<img alt="" src={cadeira}/>*/}
                                    {/*</div>*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                    {/*<div>*/}
                                        {/*<h4>Brindes Curaprox</h4>*/}
                                    {/*</div>*/}
                                    {/*<div>*/}
                                        {/*<img alt="" src={cadeira}/>*/}
                                    {/*</div>*/}
                                {/*</li>*/}
                            {/*</ul>*/}
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <a
                                href="https://goo.gl/forms/snfrbfQcTO3pGJOM2"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: 'none' }}
                                className="expo__content-button">
                                    <Button>
                                        Inscreva seu<br/>
                                        trabalho
                                    </Button>
                            </a>
                            <div style={{
                                marginTop: 16,
                                textAlign: 'end',
                                fontStyle: 'italic',
                                width: '100%',
                                color: '#16557E',
                                fontSize: 14
                            }}>
                                <p>
                                    * Confira
                                    <a href={'https://drive.google.com/file/d/1F8KW-rR4r-KPuckPRiZZk64Y4U5UYZbi/view'} target={'_blank'}> aqui </a>
                                    o regulamento
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollAnimation>
        </Hidden>
        <Hidden mdUp>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={0}>
                <div className="expo" style={{ marginTop: 32, padding: 16 }}>
                    <div className="expo__header">
                        <h1 style={{ fontSize: 24, lineHeight: '32px' }}>
                            Exposição de <br/>
                            Painéis Científicos
                        </h1>
                    </div>
                    <div className="expo__content">
                        <div className="expo__content-judging" style={{ width: '100%' }}>
                            <span style={{ fontSize: 18 }}>Para alunos da graduação e pós graduação</span>
                            <div style={{ alignSelf: 'center' }}>
                                <ul style={{ padding: 8, fontSize: 16, marginTop: 32 }}>
                                    Com banca avaliadora formada por professores da USP nas categorias:
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
                    </div>
                    <a
                        href="https://goo.gl/forms/snfrbfQcTO3pGJOM2"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none', margin: '24px auto' }}
                        className="expo__content-button">
                        <Button>
                            Inscreva seu<br/>
                            trabalho
                        </Button>
                    </a>
                    <div style={{
                        marginTop: 8,
                        textAlign: 'end',
                        fontStyle: 'italic',
                        width: '100%',
                        color: '#16557E',
                        fontSize: 14
                    }}>
                        <p>
                            * Confira
                            <a href={'https://drive.google.com/file/d/1F8KW-rR4r-KPuckPRiZZk64Y4U5UYZbi/view'} target={'_blank'}> aqui </a>
                            o regulamento
                        </p>
                    </div>
                </div>
            </ScrollAnimation>
        </Hidden>
    </div>
)

export default Expo