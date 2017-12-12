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
              <h3>{org.name}</h3>
              <p>{org.description}</p>
              <img src={org.imageURL} />
            </div>
          )
        })}
      </div>
    )
  }
}
const mapState = (state) => {
  return {
    organisms: state.organisms
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
