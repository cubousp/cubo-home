import React from 'react'
import './CuboAccess.css'
import Button from '../Button/Button'

const CuboAccess = () => (
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
)

export default CuboAccess