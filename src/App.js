import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
//import ConditionalSection from './sections/conditional';
//import cars from './data/cars.json'
//import Forms from './sections/forms';
//import PropTypes from 'prop-types';
//import FecthExample from './sections/fetch-example';
//import EjemploDeCicloDeActualizacion from './sections/ejemploCicloDeActualizacion';
//import EjemploDeComponentWillUnmount from './sections/componentWillUnmount';
//import ComponentDidCatch from './sections/componentDidCatch';

//function Hello (props) {
//return <h1>{props.title}</h1>
//}

//const Hello = (props) => <h1>{props.title}</h1>
/*
class Hello extends Component {
  render() {
    return <span>{this.props.title}</span>
  }
}

class MoreProps extends Component {
  render() {
    const {
      string,
      number,
      boolean,
      object,
      ecuation,
      title
    } = this.props
    const variable = this.props.boolean ? 'Es cierto' : 'Es falso';
    const mapOfNumber = this.props.array.map(ecuation);
    return <div>
      <p>Este es una cadena: {string}, este es un número {number}</p>
      <p>Esta es una variable: {variable}, y este, un booleano {JSON.stringify(boolean)}</p>
      <p>{mapOfNumber.join(', ')}</p>
      <p>{object.key2}</p>
      {title}
    </div>
  }
}

class Default extends Component {
  render () {
    return<span>{this.props.text}</span>
  }
}

Default.defaultProps = {
  text : 'Texto por defecto'
}

class Contador extends Component 
{
  constructor(props) {
    super(props)
    this.state = {cont : this.props.contadorInitial}
    setInterval(() => {
      this.setState({cont: this.state.cont+1})
    }, 1000)
  }
  render() {
    const contado = 1
    return <div>
      <span>Primer numero: {this.state.cont}<br/></span>
      Segundo numero: <ContadorNumero numero={this.state.cont}/><br/>
      Tercer numero: <ContadorNumero numero={contado}/><br/>
    </div>
  }
}

Contador.defaultProps = {
    contadorInitial : 0
}

class ContadorNumero extends Component
{
  render() {
    console.log('contador numero');
  return <span>{this.props.numero}</span>
  }
}

class Segundo extends Component 
{
  state = {cont : 1}
  render() {
    return <span>{this.state.cont}</span>
  }

}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p><Hello title='Hello from props'/></p>
        <p><Default text='Este no es por defecto'/></p>
        <div><MoreProps 
          array = {[0, 8, 2, 23, 83]}
          string = 'cadena'
          boolean = {false}
          number = {7}
          object = {{key:'value', key2:'value2'}}
          ecuation = {n=>4*n}
          title = {<h1>Este es un nuevo título</h1>}
          /></div>

        <p>Contador es igual a: <Contador contadorInitial={100}/></p>
        <p>Segundo contador es igual a: <Segundo/></p>

          
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/
/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <ConditionalSection></ConditionalSection>
      </div>
    )
  }
}*/
/*
class App extends Component {
  render() {
    const numbers = [1, 1, 3, 4, 5, 6]
    return (
    <div>{numbers.map((number, index) => {return <p key={index}>Soy el numero {number}</p>})}</div>
    )
  }
}*/
/*
class App extends Component {
  render() {
    return (
      <div>
        <h4>Trabajando con lista de objetos</h4>
        <ul>
          {
            cars.map( car => {
              return <CarItem key={car.id} car={car}></CarItem>
              /*return (<li key={car.id}>
                <p><strong>Nombre: </strong>{car.name}</p>
                <p><strong>Marca: </strong>{car.company}</p>
              //</li>)
            })
          }
        </ul>
      </div>
    )
  }
}

class CarItem extends Component {
  render() {
    const { car } = this.props
    return (<li>
      <p><strong>Nombre: </strong>{car.name}</p>
      <p><strong>Marca: </strong>{car.company}</p>
    </li>)
  }
}*/
/*
class App extends Component {
  render() {
    return <div>
      <h4>Eventos!</h4>
      <button onClick={()=>alert('Como estas?')}>Hola tu!</button>
    </div>
  }
}*/
/*
class App extends Component {
  state = { mouseX:0, mouseY:0};
  handleClick (e) {
    console.log(e);
    alert('Como estas??');
  }
  handleMouseMove = (e) => {
    const {clientX, clientY} = e
    this.setState({mouseX:clientX, mouseY:clientY})
  }
  render() {
    return <div>
      <h4>Eventos!</h4>
      <button onClick={this.handleClick}>Hola tu!</button>
      <div onMouseMove={this.handleMouseMove}
      style={{border:'1px solid #000', marginTop:10, padding:10}}>
        <p>{this.state.mouseX}, {this.state.mouseY}</p>
      </div>
      
    </div>
  }
}*/
/*
class App extends Component {
  render(){
    return(
      <div className="App">
        <Forms></Forms>
      </div>
    )
  }
}
*/
/*
class Box extends Component {
  render() {
    return (
      <div style={{ border: '1px solid #000', margin: 5, padding:5}}>
        {this.props.children}
      </div>
    )
  }
}

class Article extends Component {
  static propTypes = {
    author: PropTypes.string.isRequired
  }
  render() {
    const {title, date, author, children} = this.props
    return (
      <section>
        <h2>{title}</h2>
    {author && <p><em>Escrito por {author}</em></p>}
    <Box>{date}</Box>
    <article>
      {children}
    </article>
      </section>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
      <h4>Esto es un children</h4>
        <Article
          author="Marielis"
          date={new Date().toLocaleDateString()}
          title='Articulo sobre la prop children' 
        >
          <p>El contenido que envolvemos dentro del componente Article sera enviado al componente como this.props.children.</p>
          <strong>Y mantiene las etiquetas y componentes que hayas añedido</strong>
        </Article>
      </div>
    )
  }
}*/
/*
class App extends Component {
  render() {
    return (
      <div>
        <FecthExample></FecthExample>
      </div>
    )
  }
}*/

/*class App extends Component {
  render() {
      return (
        <div className="App">
        <EjemploDeCicloDeActualizacion></EjemploDeCicloDeActualizacion>
        </div>
      )
  }
}*/

/*class App extends Component {
  render() {
      return (
        <div className="App">
        <EjemploDeComponentWillUnmount/>
        </div>
      )
  }
}*/
/*
class App extends Component {
  render() {
      return (
        <div className="App">
        <ComponentDidCatch/>
        </div>
      )
  }
}*/
import BitCoinPrice from './sections/container-component';

class App extends Component {
  render() {
      return (
        <div className="App">
        <BitCoinPrice/>
        </div>
      )
  }
}

export default App;
