import React, { Component } from 'react';
import '../../Style/hero.css';

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      people: [],
    };
  }

  componentDidMount() {
    fetch('https://swapi.dev/api/people')
      .then((response) => response.json())
      .then(
        (data) => {
          this.setState({
            isLoaded: true,
            people: data.results,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, people } = this.state;
    if (error) {
      return (
        <p>
          {' '}
          Error
          {error.message}
        </p>
      );
    } if (!isLoaded) {
      return <p> Loading...</p>;
    } 
    return (
      <div className="hero-top">
        <div className="hero-body">
          <h1>Star Wars</h1>
          <div className="hero">
            {people.map((person) => (
              <div key={people.name} className="hero-main">
                <div className="hero-name">
                  Name:
                  {person.name}
                </div>
                <div className="hero-name">
                  Height:
                  {person.height}
                </div>
                <div className="hero-name">
                  Mass:
                  {person.mass}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
