import React, {Component, PureComponent} from 'react'
import PropsTypes from 'prop-types'

const ANIMAL_IMAGES = {
    panda: 'https://assets.afcdn.com/story/20161017/989289_w980h638c1cx511cy250.jpg',
    puma: 'https://image.shutterstock.com/image-photo/portrait-beautiful-puma-autumn-forest-260nw-1222583911.jpg',
    tiger: 'https://www.ambientum.com/wp-content/uploads/2019/02/tigre-bengala-696x392.jpg',
    otro: 'https://www.ambientum.com/wp-content/uploads/2019/02/tigre-bengala-696x392.jpg'
}

const ANIMALS = Object.keys(ANIMAL_IMAGES)

class AnimalImage extends PureComponent {
    state = { src: ANIMAL_IMAGES[this.props.animal]}

    componentWillReceiveProps (nextProps) {
        this.setState({src: ANIMAL_IMAGES[nextProps.animal]})
    }

    componentWillUpdate (nextProps, nextState) {
        const img = document.querySelector('img')
        img.animate ([{
            filter: 'blur(0px)'
        },{
            filter: 'blur(2px)'
        }], {
            duration: 500,
            easing:'ease'
        })
    }

    componentDidUpdate (prevProps, prevState) {
        console.log('componentDidUpdate')
        const img = document.querySelector('img')
        img.animate ([{
            filter: 'blur(2px)'
        },{
            filter: 'blur(0px)'
        }], {
            duration: 1500,
            easing:'ease'
        })
    }

    render () {
        console.log('render')
        return (
            <div>
                <p>Selected {this.props.animal}</p>
                <img  alt={this.props.animal} src={this.state.src} width='250'></img>
            </div>
        )
    }
}

AnimalImage.PropsTypes = {
    animal: PropsTypes.oneOf(ANIMALS)
}


class EjemploDeCicloDeActualizacion extends Component {
    state = { animal:'panda' }

    _renderAnimalButton = (animal) => {
        return (
        <button 
            //disabled = {animal === this.state.animal}
            key = { animal }
            onClick={ () => this.setState({ animal })}
            >{ animal }</button>
        )
    }
    render () {
        return (
            <div>
                <h4>Ciclo de actualizacion</h4>
                {ANIMALS.map(this._renderAnimalButton)}
                <AnimalImage animal={this.state.animal}></AnimalImage>
            </div>
        )
    }
}

export default EjemploDeCicloDeActualizacion