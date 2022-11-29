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
// Para cada planeta da lista, você deverá renderizar um componente PlanetCard, passando 
// o atributo name para a prop planetName e o atributo image para a prop planetImage.
export default SolarSystem;
