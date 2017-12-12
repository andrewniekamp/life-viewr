import axios from 'axios';

const GET_ORGANISMS = 'GET_ORGANISMS';

const initialState = [];

const getOrganisms = organisms => ({ type: GET_ORGANISMS, organisms });

export const getOrganismsThunk = () =>
  dispatch =>
    axios.get('/api/organisms')
      .then( (organisms) => dispatch(getOrganisms(organisms.data)))
      .catch(err => console.log(err));

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ORGANISMS:
      return action.organisms;
    default:
      return state;
  }
}
