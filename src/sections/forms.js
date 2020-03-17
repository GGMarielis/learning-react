import React, {Component} from 'react'

export default class Froms extends Component {
    state = {
        inputName:"",
        inputTwitter: "@",
        inputTerms: true
    }
    handleSubmit = (e) => {
        e.preventDefault()    
        console.log(this.state)
    }
    handleChange = (e) => {
        this.setState({inputTerms : e.target.checked})
        console.log('handleChange')
        console.log(e.target.checked)
    }
    render () {
        return (
            <div>
                <h4>Formularios</h4>
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <label htmlFor="name">Nombre:</label>
                        <input 
                            id="name"
                            name="name"
                            onChange={e => this.setState({inputName: e.target.value})}
                            placeholder="Introduce el nombre"
                            value={this.state.inputName}
                        ></input>
                    </p>

                    <p>
                        <label htmlFor="twitter">Twitter:</label>
                        <input 
                            id="twitter"
                            name="twitterAccount"
                            onChange={e => this.setState({inputTwitter: e.target.value})}
                            placeholder="Introduce tu twitter"
                            value={this.state.inputTwitter}
                        ></input>
                    </p>

                    <p>
                        <label>
                            <input 
                                checked={this.state.inputTerms}
                                onChange={this.handleChange}
                                type='checkbox'
                            ></input>
                            Accepted terms
                        </label>
                    </p>

                    <button>Enviar</button>
                </form>
            </div>
        )
    }
    
}