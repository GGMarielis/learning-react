import React, { Component } from 'react'

class ComponenteADesmontar extends Component {
    state = { windowWith: 0}

    _updateStateWithWindowWidth = () => {
        this.setState({ windowWidth: document.body.clientWidth})
    }

    componentDidMount () {
        this._updateStateWithWindowWidth()
        window.addEventListener(
            'resize',
            this._updateStateWithWindowWidth
        )
    }

    componentWillUnmount () {
        window.removeEventListener(
            'resize',
            this._updateStateWithWindowWidth
        )
    }

    render () {
        return (
            <div>
                <h4>Ancho de la ventana {this.state.windowWidth}</h4>
            </div>
        )
    }
}

class EjemploDeComponentWillUnmount extends Component {
    state = { mostrartComponente: true}
    render () {
        if (this.state.mostrartComponente) {
            return (
                <div>
                    <h4>Ciclo de desmontaje</h4>
                    <ComponenteADesmontar></ComponenteADesmontar>
                    <button onClick={() => this.setState({mostrartComponente: false})}>Desmontar</button>
                </div>
            )
        }
        return (
            <div>
                <h5>Componente desmontado</h5>
            </div>
        )
    }
}

export default EjemploDeComponentWillUnmount