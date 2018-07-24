import React from 'react'
import './CuboAccess.css'
import Button from '../Button/Button'
import ScrollAnimation from 'react-animate-on-scroll'
import Hidden from '@material-ui/core/Hidden';

const CuboAccess = () => (
    <div>
        <Hidden mdDown>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={0}>
                <div className="cubo-access">
                    <div className="cubo-access__header">
                        <h1>Cubo Access</h1>
                    </div>
                    <div className="cubo-access__content">
                        <div className="cubo-access__content-benefits">
                            <ul>Com o CUBO Access, você tem acesso a:</ul>
                            <li>
                                - Mais de 40 palestras com os melhores profissionais do mercado
                            </li>
                            <li>
                                - Mais de 10 atividades práticas para alunos
                                do primeiro ao último ano
                            </li>
                            <li>
                                - Stands de produtos com ofertas
                                exclusivas
                            </li>
                            <li>
                                - Exposição de painéis científicos
                            </li>
                            <li>
                                - Material exclusivo com
                                as publicações do evento
                            </li>
                            <li>
                                - Descontos em hospedagem e
                                alimentação com os nossos parceiros
                            </li>
                        </div>
                        <div className="cubo-access__content-prices">
                            <ul>
                                <li>
                                    <h4>Aluno FOUSP - Graduação</h4>
                                    <span>Gratuito</span>
                                </li>
                                <li>
                                    <h4>Aluno FOUSP - Pós-Graduação</h4>
                                    <span>Dia avulso: R$ 25,00</span><br/>
                                    <span>Todos os dias: R$ 55,00</span>
                                </li>
                                <li>
                                    <h4>Participantes externos</h4>
                                    <span>Dia avulso: R$ 35,00</span><br/>
                                    <span>Todos os dias: R$ 65,00</span>
                                </li>
                            </ul>
                        </div>
                        { process.env.REACT_APP_INSCRIPTION_OPEN === 'true' &&
                            <div className="cubo-access__content-button">
                                <Button>Inscreva-se</Button>
                            </div>
                        }
                    </div>
                </div>
            </ScrollAnimation>
        </Hidden>
        <Hidden mdUp>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={0}>
                <div className="cubo-access" style={{ marginTop: 32, padding: 16 }}>
                    <div className="cubo-access__header">
                        <h1 style={{ fontSize: 24, lineHeight: '32px' }}>Cubo Access</h1>
                    </div>
                    <div className="cubo-access__content" style={{ width: '100%', margin: 0}}>
                        <div className="cubo-access__content-benefits" style={{
                            margin: 0,
                            width: '100%'
                        }}>
                            <ul style={{
                                padding: 8,
                                margin: 0,
                                marginTop: 16,
                                textAlign: 'center',
                                fontSize: 16
                            }}>Com o CUBO Access, você tem acesso a:</ul>
                            <li style={{
                                fontSize: 16,
                                padding: '0 16px',
                                textAlign: 'center'
                            }}>
                                - Mais de 40 palestras com os melhores profissionais do mercado
                            </li>
                            <li style={{
                                fontSize: 16,
                                padding: '0 16px',
                                textAlign: 'center'
                            }}>
                                - Mais de 10 atividades práticas para alunos
                                do primeiro ao último ano
                            </li>
                            <li style={{
                                fontSize: 16,
                                padding: '0 16px',
                                textAlign: 'center'
                            }}>
                                - Stands de produtos com ofertas
                                exclusivas
                            </li>
                            <li style={{
                                fontSize: 16,
                                padding: '0 16px',
                                textAlign: 'center'
                            }}>
                                - Exposição de painéis científicos
                            </li>
                            <li style={{
                                fontSize: 16,
                                padding: '0 16px',
                                textAlign: 'center'
                            }}>
                                - Material exclusivo com
                                as publicações do evento
                            </li>
                            <li style={{
                                fontSize: 16,
                                padding: '0 16px',
                                textAlign: 'center'
                            }}>
                                - Descontos em hospedagem e
                                alimentação com os nossos parceiros
                            </li>
                        </div>
                        { process.env.REACT_APP_INSCRIPTION_OPEN === 'true' &&
                        <div className="cubo-access__content-button">
                            <Button>Inscreva-se</Button>
                        </div>
                        }
                    </div>
                    <div className="cubo-access__content-prices" style={{ width: '100%'}}>
                        <ul style={{
                            margin: 0,
                            padding: 0
                        }}>
                            <li style={{ textAlign: 'center'}}>
                                <h4 style={{ fontSize: 20 }}>Aluno FOUSP - Graduação</h4>
                                <span style={{ fontSize: 18 }}>Gratuito</span>
                            </li>
                            <li style={{ textAlign: 'center'}}>
                                <h4 style={{ fontSize: 20 }}>Aluno FOUSP - Pós-Graduação</h4>
                                <span style={{ fontSize: 18 }}>Dia avulso: R$ 25,00</span><br/>
                                <span style={{ fontSize: 18 }}>Todos os dias: R$ 55,00</span>
                            </li>
                            <li style={{ textAlign: 'center'}}>
                                <h4 style={{ fontSize: 20 }}>Participantes externos</h4>
                                <span style={{ fontSize: 18 }}>Dia avulso: R$ 35,00</span><br/>
                                <span style={{ fontSize: 18 }}>Todos os dias: R$ 65,00</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </ScrollAnimation>
        </Hidden>
    </div>
)

export default CuboAccess