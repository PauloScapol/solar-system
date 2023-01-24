import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div className="missions-background" data-testid="missions">
        <Title headline="Missões" />
        <section className="missions">
          { missions.map((mission) => (
            <MissionCard
              key={ mission.name }
              name={ mission.name }
              year={ mission.year }
              country={ mission.country }
              destination={ mission.destination }
            />)) }
        </section>
      </div>
    );
  }
}

export default Missions;
