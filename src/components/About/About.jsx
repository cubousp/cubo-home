import React from 'react'
import './About.css'
import staff from './staff.jpg'

const About = () => (
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
                    avanços da odontologia brasileira e mundial. <br/>

                    Diversas atividades como palestras, hands on, cirurgias ao vivo e workshops fazem parte da grade de
                    atividades que preparamos para enriquecer a formação de todos os nossos congressistas. Além dessas
                    atividades, também contamos com um espaço para a apresentação de trabalhos de iniciação cientifica e
                    pós graduação, que são avaliados por professores renomados da casa e os melhores são premiados.

                </p>
            </div>
        </div>
        <div className="about__photo">
            <img alt="staff" src={staff}/>
        </div>
    </div>
)

export default About