import React from 'react'
import './Form.css'
import Button from '../Button/Button'
import Snackbar from '../Snackbar/Snackbar'
import { Mutation } from "react-apollo";
import {SEND_EMAIL} from "../../repository/mail";

class Form extends React.Component {
    state = {
        snackbarOpen: false,
        snackbarMessage: '',
        snackbarVariant: '',
        name: '',
        email: '',
        phone: '',
        message: '',
    };

    validateInput() {
        const { name, email, phone, message } = this.state
        if (name && name.trim().length && email && email.trim().length && phone && phone.trim().length && message && message.trim().length) {
            return
        }
        throw new Error('validation')
    }

    handleSubmit = async(mutation) => {
        try {
            this.validateInput()
            const { name, email, phone, message } = this.state
            await mutation({ variables: { input: { name, email, phone, message }} });
            this.setState({
                snackbarOpen: true,
                snackbarVariant: 'success',
                snackbarMessage: 'Mensagem enviada com sucesso! Retornaremos em breve.',
                name: '',
                email: '',
                phone: '',
                message: '',
            });
        } catch (err) {
            let errorMessage
            if (err.message === 'validation') {
                errorMessage = 'Por favor, preencha todos os campos'
            } else {
                errorMessage = 'Um erro ocorreu. Tente novamente'
            }
            this.setState({
                snackbarOpen: true,
                snackbarVariant: 'error',
                snackbarMessage: errorMessage
            });
        }
    };

    handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({ snackbarOpen: false });
    };

    onChangeInput(prop, value) {
        this.setState({
            [prop]: value
        })
    }

    render() {
        return (
            <Mutation mutation={SEND_EMAIL}>
                {
                    (sendEmail) => (
                        <form className="form">
                            <div className="form-group">
                                <label>Nome</label>
                                <input className="form-control" value={this.state.name} onChange={(event) => this.onChangeInput('name', event.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" value={this.state.email} onChange={(event) => this.onChangeInput('email', event.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label>Telefone</label>
                                <input className="form-control" value={this.state.phone} onChange={(event) => this.onChangeInput('phone', event.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label>Mensagem</label>
                                <textarea rows="6" className="form-control" value={this.state.message} onChange={(event) => this.onChangeInput('message', event.target.value)}/>
                            </div>
                            <div className="form-button">
                                <Button onClick={() => this.handleSubmit(sendEmail)}>Enviar</Button>
                            </div>
                            <Snackbar
                                vertical={"bottom"}
                                horizontal={"right"}
                                variant={this.state.snackbarVariant}
                                message={this.state.snackbarMessage}
                                open={this.state.snackbarOpen}
                                handleClose={this.handleSnackbarClose}
                            />
                        </form>
                    )
                }
            </Mutation>
        )
    }
}

export default Form