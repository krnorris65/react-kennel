import React, { Component } from 'react';
import {Link} from "react-router-dom"
import './Animal.css';

class AnimalCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./dog.svg')} alt="My Dog" />
          </picture>
          <h3>Name: <span className="card-petname">{this.props.animal.name}</span></h3>
          <p>Breed: {this.props.animal.breed}</p>
          <Link to={`/animals/${this.props.animal.id}`}><button>Details</button></Link>
          <button type="button" onClick={() => this.props.deleteAnimal(this.props.animal.id)}>Discharge</button>
        </div>
      </div>
    );
  }
}

export default AnimalCard;