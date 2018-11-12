import React, { Component } from 'react';

class Flat extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    if (this.props.selectedFlat) {
      this.props.selectedFlat(this.props.lat, this.props.lng);
    }
  }

  render() {
    var divStyle = {
      backgroundImage: 'url(' + this.props.imageUrl + ')'
    };

    return (
      <div className="card" style={ divStyle } onClick={ this.handleClick }>
        <div className="card-category">{this.props.price} {this.props.priceCurrency}</div>
        <div className="card-description">
          <h2>{this.props.name}</h2>
        </div>

      </div>
    );
  }
}

export default Flat;
