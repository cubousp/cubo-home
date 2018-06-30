import React from 'react'
import './Form.css'
import Button from '../Button/Button'

const Form = () => (
    <form className="form">
        <div className="form-group">
            <label>Nome</label>
            <input className="form-control"/>
        </div>
        <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control"/>
        </div>
        <div className="form-group">
            <label>Telefone</label>
            <input className="form-control"/>
        </div>
        <div className="form-group">
            <label>Mensagem</label>
            <textarea rows="6" className="form-control"/>
        </div>
        <div className="form-button">
            <Button>Enviar</Button>
        </div>
    </form>
)

export default Form