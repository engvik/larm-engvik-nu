import React from 'react';
import { render } from 'react-dom';

import concertData from './concert-data';

class Concerts extends React.Component {
  renderSchedule(schedule) {
    return schedule.map((slot,i ) => {
      return (
        <div className="slot" key={`slot-${i}`}>
          <span>{slot.time}</span>
          <span>{slot.name}</span>
        </div>
      );
    });
  }

  renderVenues(venues) {
    return venues.map((venue, i) => {
      const schedule = this.renderSchedule(venue.concerts);

      return (
        <div className="venue" key={`venue-${i}`}>
          <h3>{venue.venue}</h3>
          <a href={venue.url}>{venue.title}</a>
          <p>{venue.info}</p>
          {schedule}
        </div>
      );
    });
  }

  renderConcerts() {
    return concertData.map((day) => {
      const venues = this.renderVenues(day.venues);

      return (
        <div className="day" key={day.day}>
          <h2>{day.day}</h2>
          {venues}
        </div>
      );
    });
  }

  render() {
    const concertData = this.renderConcerts();

    return (
      <div className="concerts">
        {concertData}
      </div>
    );
  }
}

export default Concerts;
