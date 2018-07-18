import React from 'react'
import './Contact.css'
import Form from './Form'

const Contact = () => (
    <div className="contact">
        <div className="contact__header">
            <h1>Fale conosco</h1>
        </div>
        <div className="contact__content">
            <div className="contact__row">
                <div className="contact__content-label">
                    <p>
                        Ficou com alguma dúvida? Mande uma mensagem pra gente ou entre <br/>
                        em contato com um de nossos organizadores!
                    </p>
                </div>
                <div className="contact__content-grid">
                    <div className="contact__content-grid-item">
                        <h6>Patrocínio</h6>
                        <p>Bárbara Aline Bernardino</p>
                        <span>barbara.bernardino@usp.br</span>
                    </div>
                    <div className="contact__content-grid-item">
                        <h6>Recepção</h6>
                        <p>Barbara Schneider Larios</p>
                        <span>barbara.larios@usp.br</span>
                    </div>
                    <div className="contact__content-grid-item">
                        <h6>Painéis Científicos</h6>
                        <p>Giovanna Carvalho</p>
                        <span>giiovannalopes@hotmail.com</span>
                    </div>
                    <div className="contact__content-grid-item">
                        <h6>Informática</h6>
                        <p>Isabella Souza Ferri</p>
                        <span>bellaferri@usp.br</span>
                    </div>
                </div>
            </div>
            <div className="contact__row" style={{ display: 'flex', justifyContent: 'center'}}>
                <div className="contact__content-form">
                    <Form/>
                </div>
            </div>
        </div>
    </div>
)

export default Contact