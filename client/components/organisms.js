import React from 'react'
import { connect } from 'react-redux'

import { getOrganismsThunk, addOrganismThunk } from '../store';

export class Organisms extends React.Component {


  componentDidMount() {
    this.props.getOrganisms();
  }

  render() {
    return (
      <div>
        {
          this.props.isLoggedIn &&
          <div>
            <form id="add-organism-form" onSubmit={this.props.addOrganism}>
              <h5>Add an Organism</h5>
              <label htmlFor="name-input">Name</label>
              <input
                required
                id="name-input"
                className="form-input"
                name="newName"
                type="text"
              />
              <label htmlFor="imageURL-input">Image URL</label>
              <input
                required
                id="imageURL-input"
                className="form-input"
                name="newImageURL"
                type="text"
              />
              <label htmlFor="kingdom-input">Kingdom</label>
              <input
                required
                id="kingdom-input"
                className="form-input"
                name="newKingdom"
                type="text"
              />
              <label htmlFor="phylum-input">Phylum</label>
              <input
                required
                id="phylum-input"
                className="form-input"
                name="newPhylum"
                type="text"
              />
              <label htmlFor="class-input">Class</label>
              <input
                required
                id="class-input"
                className="form-input"
                name="newClass"
                type="text"
              />
              <label htmlFor="order-input">Order</label>
              <input
                required
                id="order-input"
                className="form-input"
                name="newOrder"
                type="text"
              />
              <label htmlFor="family-input">Family</label>
              <input
                required
                id="family-input"
                className="form-input"
                name="newFamily"
                type="text"
              />
              <label htmlFor="genus-input">Genus</label>
              <input
                required
                id="genus-input"
                className="form-input"
                name="newGenus"
                type="text"
              />
              <label htmlFor="species-input">Species</label>
              <input
                required
                id="species-input"
                className="form-input"
                name="newSpecies"
                type="text"
              />
              <button type="submit">Add</button>
            </form>
          </div>
        }
        {this.props.organisms && this.props.organisms.map(org => {
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
    isLoggedIn: !!state.user.id,
    organisms: state.organisms,
    filter: state.filter
  }
}

const mapDispatch = (dispatch) => {
  return {
    getOrganisms: () => {
      dispatch(getOrganismsThunk());
    },
    addOrganism: (event) => {
      event.preventDefault();
      let data = {
        name: event.target.newName.value,
        imageURL: event.target.newImageURL.value,
        kingdom: event.target.newKingdom.value,
        phylum: event.target.newPhylum.value,
        class: event.target.newClass.value,
        order: event.target.newOrder.value,
        family: event.target.newFamily.value,
        genus: event.target.newGenus.value,
        species: event.target.newSpecies.value
      }
      console.log(data);
      dispatch(addOrganismThunk(data));
    }
  }
}

export default connect(mapState, mapDispatch)(Organisms);
