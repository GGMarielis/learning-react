import React, { Component } from 'react'

class BotonLanzaError extends Component {
    state = { throwError: false }

    render() {
        if (this.state.throwError){
            throw new Error('Error lanzado por el boton')
        }
        return (
            <button onClick={ () => this.setState({ throwError: true})}>Lanzar Error!</button>
        )
    }
}

class EjemploDeComponentDidCatch extends Component {
    state = {hasError: false, errorMsg: ''}
    componentDidCatch (error, errorInfo) {
        console.log ('componentDidCatch')
        console.log ({error, errorInfo})
        this.setState({ hasError:true, errorMsg:error.toString() })
    }
    render () {
        if (this.state.hasError) {
            return (
                <div>
                    <p>Error en el componente {this.state.errorMsg}</p>
                    <button onClick={ () => this.setState({ hasError: false})}>Volver a la APP</button>
                </div>
            )
        }
        return (
            <div>
                <h5>Componente did catch</h5>
                <BotonLanzaError></BotonLanzaError>
            </div>
        )
    }
}

export default EjemploDeComponentDidCatch