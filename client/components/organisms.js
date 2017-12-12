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
