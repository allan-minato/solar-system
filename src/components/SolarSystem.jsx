import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <h3>
          <Title headline="Planetas" />
        </h3>
        {planets.map(({ name, image }) => (
          <PlanetCard
            key={ name }
            planetName={ name }
            planetImage={ image }
          />
        ))}
      </div>
    );
  }
}

export default SolarSystem;
