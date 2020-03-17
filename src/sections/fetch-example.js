import React, {Component} from 'react'

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
    _renderCurrencies () {
        const {bpi} = this.state
        console.log(bpi)
        const currencies = Object.keys(bpi) // {'EUR', 'GRP', 'USD'}
        return currencies.map(currency => (
                <div key={currency}>
                    1 BTC is {bpi[currency].rate}
                    <span> {currency}</span>
                </div>
            )
        )
    }
    render() {
        return (
            <div>
                <h4>Bitcoin PRice index</h4>
                {this._renderCurrencies()}
            </div>
        )
    }
}

export default FetchExample