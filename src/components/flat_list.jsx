import React, { Component } from 'react';
import Flat from './flat.jsx';

class FlatList extends Component {
  constructor(props) {
    super(props);
  }

  renderList = () => {
    return this.props.flats.map(flat => {
      return <Flat key={flat.name} name={flat.name} lat={flat.lat} lng={flat.lng} imageUrl={flat.imageUrl} price={flat.price} priceCurrency={flat.priceCurrency} selectedFlat={this.props.selectedFlat}/>
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.flats !== this.props.flats)
  }

  render() {
    return (
      <div className="flat-list">
        {this.renderList()}
      </div>
    );
  }
}

export default FlatList;
