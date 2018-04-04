import React from 'react';
import News from '../data/aktuelles.json';
import Events from '../data/veranstaltungen.json';
import EventsEntry from './EventsEntry';
import NewsEntry from './NewsEntry';

export default class Sidebar extends React.Component {
  state = {
    activeCategory: null,
  };

  static CATEGORIES = ['news', 'events'];
  static MORELINKTEXT = 'mehr Informationen';

  componentWillMount() {
    // zufällige Auswahl eines der Tabs
    this.setState({
      activeCategory:
        Sidebar.CATEGORIES[this.getRandomCategory(Sidebar.CATEGORIES.length)],
    });
  }

  getRandomCategory = n => {
    return Math.floor(Math.random() * 10000) % n;
  };

  selectTab = e => {
    this.setState({ activeCategory: e.target.id });
  };

  showNews = () => {
    const newsArr = News;
    if (newsArr.length) {
      return (
        <div>
          <div className="newsBody">
            {newsArr.map(entry => (
              <NewsEntry
                key={entry.title}
                entryDate={entry.date}
                entryTitle={entry.title}
                entryDesc={entry.text}
                entryUrl={entry.link}
                entryLinkText={Sidebar.MORELINKTEXT}
              />
            ))}
          </div>
          <div className="newsFooter">
            <a className="allNewsLink" href="#">
              Alle News in der Übersicht
            </a>
          </div>
        </div>
      );
    } else {
      return (
        <div className="newsBody">
          <p>keine aktuellen Informationen verfügbar</p>
        </div>
      );
    }
  };

  showEvents = () => {
    const eventsArr = Events;
    if (eventsArr.length) {
      return (
        <div className="eventsBody">
          {eventsArr.map(entry => (
            <EventsEntry
              key={`${entry.date}-${entry.title}`}
              entryDate={entry.date}
              entryName={entry.name}
            />
          ))}
        </div>
      );
    } else {
      return (
        <div className="eventsBody">
          <p>Keine Veranstaltungen verfügbar.</p>
        </div>
      );
    }
  };

  drawTab = (category, label) => {
    const { activeCategory } = this.state;
    return (
      <button
        className={activeCategory === category ? 'active' : 'inactive'}
        onClick={this.selectTab}
        id={category}
      >
        {label}
      </button>
    );
  };

  render() {
    const { activeCategory } = this.state;

    return (
      <section className="sidebar">
        <div className="sidebarHeader">
          {this.drawTab('news', 'Aktuelles')}
          {this.drawTab('events', 'Veranstaltungen')}
        </div>
        <div className="sidebarBody">
          {activeCategory === 'events' && this.showEvents()}
          {activeCategory === 'news' && this.showNews()}
        </div>
      </section>
    );
  }
}
