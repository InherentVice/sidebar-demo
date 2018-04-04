import React from 'react';

export default class NewsEntry extends React.Component {
  getImgUrl = (width, height) => {
    return `http://placeimg.com/${width}/${height}`;
  };

  render() {
    const {
      entryDate,
      entryTitle,
      entryDesc,
      entryLink,
      entryLinkText,
    } = this.props;
    
    const imgWidth = 300;
    const imgHeight = 233;

    return (
      <div className="newsEntry">
        <img
          src={this.getImgUrl(imgWidth, imgHeight)}
          alt={`Bild: ${entryTitle}`}
          width={imgWidth}
          height={imgHeight}
        />
        <span className="entryDate">{entryDate}</span>
        <h3 className="entryTitle">{entryTitle}</h3>
        <p className="entryDesc">{entryDesc}</p>
        <a href={entryLink} className="entryLink">
          {entryLinkText}
        </a>
      </div>
    );
  }
}
