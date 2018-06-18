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
                    Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id
                    est eopksio laborum. Sed ut perspiciatis unde
                    omnis istpoe natus error sit voluptatem
                    accusantium doloremque eopsloi laudantium,
                    totam rem aperiam, eaque ipsa quae ab illo
                    inventore veritatis et quasi architecto beatae
                    vitae dicta sunot explicabo. Nemo ernim ipsam
                    voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sedopk quia consequuntur magni
                    dolores eos qui rationesopl voluptatem sequi nesciunt.
                </p>
            </div>
        </div>
        <div className="about__photo">
            <img alt="staff" src={staff}/>
        </div>
    </div>
)

export default About