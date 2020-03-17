import React, {Component} from 'react'


class LoginButton extends Component {
    render() {
        return <button>Iniciar sesion</button>
    }
}


class LogoutButton extends Component {
    render() {
        return (
            <div>
                <p>Bienvenido!</p>
                <button>Cerrar sesion</button>
            </div>
        )
    }
}
/*
function useConditionalRendering (mostrarA) {
    if (mostrarA) {
        return <ComponentA></ComponentA>
    }
    {useConditionalRendering(this.state.mostrarA)}
    return <ComponentB></ComponentB>
    {conditionalRendering}
    {this.state.mostrarA ? <ComponentA/> : <ComponentB/>}
}*/

export default class ConditionalSection extends Component {
    
    state = {isUserLogged: true}
    
    render() {
        //const conditionalRendering = this.state.mostrarA ? <LoginButton/> : <LogoutButton/>
        return (
            <div>
                <h4>Conditional rendering</h4>
                {this.state.isUserLogged ? <LoginButton/> : <LogoutButton/>}
            </div>
        )
    }
}