import React from 'react'
import {connect} from 'react-redux'

import { getOrganismsThunk } from '../store';

export class Organisms extends React.Component {


  componentDidMount() {
    this.props.getOrganisms();
  }

  render() {
    return (
      <div>
        { this.props.organisms && this.props.organisms.map( org => {
          return (
            <div key={org.id}>
              <div className="organism-container">
                <h3 className="organism-name">{org.name}</h3>
                <p className="organism-description">{org.description}</p>
                <div className="organism-classifications-container">
                  <div className="organism-classification">
                    <h4>Kingdom</h4>
                    <p>{org.kingdom.name}</p>
                  </div>
                  <div className="organism-classification">
                    <h4>Phylum</h4>
                    <p>{org.phylum.name}</p>
                  </div>
                  <div className="organism-classification">
                    <h4>Class</h4>
                    <p>{org.class.name}</p>
                  </div>
                  <div className="organism-classification">
                    <h4>Order</h4>
                    <p>{org.order.name}</p>
                  </div>
                  <div className="organism-classification">
                    <h4>Family</h4>
                    <p>{org.family.name}</p>
                  </div>
                  <div className="organism-classification">
                    <h4>Genus</h4>
                    <p>{org.genus.name}</p>
                  </div>
                  <div className="organism-classification">
                    <h4>Species</h4>
                    <p>{org.species.name}</p>
                  </div>
                </div>
              </div>
              <div className="organism-image-container">
                <img className="organism-image" src={org.imageURL} />
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}
const mapState = (state) => {
  return {
    organisms: state.organisms,
    filter: state.filter
  }
}

const mapDispatch = (dispatch) => {
  return {
    getOrganisms: () => {
      dispatch(getOrganismsThunk());
    }
  }
}

export default connect(mapState, mapDispatch)(Organisms);
