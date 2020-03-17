import React from 'react'

const _renderCurrencies = (bpi) => {
    const currencies = Object.keys(bpi) // {'EUR', 'GRP', 'USD'}
    return currencies.map(currency => (
            <div key={currency}>
                1 BTC is {bpi[currency].rate}
                <span> {currency}</span>
            </div>
        )
    )
}

const BitCoinPrice = ({bpi}) => (
    <div>
        <h4>Bitcoin PRice index</h4>
        {_renderCurrencies(bpi)}
    </div>
)

export default BitCoinPrice