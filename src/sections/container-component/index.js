import React, {Component} from 'react'
import BitCoinPrice from './presentational'

class FetchExample extends Component {
    state = {bpi : {}}
    
    componentDidMount () {
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(res => res.json())
        .then(data => {
            const {bpi} = data
            this.setState({bpi})
        })
    }

    render() {
        return (
            <BitCoinPrice bpi={this.state.bpi}></BitCoinPrice>
        )
    }
}

export default FetchExample