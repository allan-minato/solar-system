import React from 'react';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <h3>
          {' '}
          <Title headline="Planetas" />
        </h3>
      </div>
    );
  }
}

export default SolarSystem;
