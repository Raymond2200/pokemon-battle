import './App.css';
import reactDom from 'react-dom';
import React from 'react';
import Pikachu from './components/Pikachu/Pikachu';
import Charzard from './components/Charzard/Charzard';
import Status from './components/Status/Status';


class App extends React.Component {
  state ={pikachu: 100, charzard:150, attacked:"Fighters are ready"}
  attack= (x) => {
    if (x === 'pika') {
      this.setState({ 
        pikachu: this.state.pikachu -10,
        attacked: "charizard is attacking pikachu"})
    }
    else if(x === "char"){
      this.setState({charzard: this.state.charzard -10,
      attacked: "pikachu is attacking charizard"})
    }
  }

  render () {
    return (
      <div className="App">
        <Charzard charhp={this.state.charzard} attack={this.attack} className='Pokemon'/>
        <Pikachu pikahp={this.state.pikachu} attack={this.attack} className='Pokemon'/>
        <br/>
        <Status attacked={this.state.attacked} className='Pokemon'/>
      </div>
  )}
}

export default App;