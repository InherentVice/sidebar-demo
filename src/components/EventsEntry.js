import React from 'react';

export default class EventsEntry extends React.Component {
  render() {
    const { entryDate, entryName } = this.props;

    return (
      <div className="eventsEntry">
        <span className="entryDate">{entryDate}</span>
        <span className="entryTitle">{entryName}</span>
      </div>
    );
  }
}