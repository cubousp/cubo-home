import React from 'react'
import './About.css'
import staff from './staff.jpg'
import ScrollAnimation from 'react-animate-on-scroll'
import Hidden from '@material-ui/core/Hidden';

const About = () => (
    <div>
        <Hidden mdDown>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                <div className="about">
                    <div className="about col">
                        <div className="about__header">
                            <h1>Sobre o CUBO</h1>
                        </div>
                        <div className="about__content">
                            <h6>Organizado por mais de 50 alunos!</h6>
                            <p>
                                Em sua 42 edição, o maior congresso universitario do Brasil almeja proporcionar a seus congressitas
                                experiencias unicas que complementem sua formação. Organizado totalmente por alunos, o CUBO traz os
                                assuntos mais atuais e relevantes da odontologia moderna, apresentando uma grade de atividades
                                recheada de temas que possibilitam que os congressistas se sintam mais próximos das novidades e
                                avanços da odontologia brasileira e mundial.
                            </p>
                        </div>
                    </div>
                    <div className="about__photo">
                        <img alt="staff" src={staff}/>
                    </div>
                </div>
            </ScrollAnimation>
        </Hidden>
        <Hidden mdUp>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                <div className="about" style={{ marginTop: 32 }}>
                    <div className="about col">
                        <div className="about__header">
                            <h1 style={{ fontSize: 24, lineHeight: '32px' }}>Sobre o CUBO</h1>
                        </div>
                        <div className="about__content" style={{
                            padding: 16
                        }}>
                            <h6 style={{ fontSize: 18 }}>Organizado por mais de 50 alunos!</h6>
                            <p style={{ fontSize: 16, textAlign: 'center' }}>
                                Em sua 42 edição, o maior congresso universitario do Brasil almeja proporcionar a seus congressitas
                                experiencias unicas que complementem sua formação. Organizado totalmente por alunos, o CUBO traz os
                                assuntos mais atuais e relevantes da odontologia moderna, apresentando uma grade de atividades
                                recheada de temas que possibilitam que os congressistas se sintam mais próximos das novidades e
                                avanços da odontologia brasileira e mundial.
                            </p>
                        </div>
                    </div>
                </div>
            </ScrollAnimation>
        </Hidden>
    </div>
)

export default About