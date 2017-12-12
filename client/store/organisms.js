import axios from 'axios';

const GET_ORGANISMS = 'GET_ORGANISMS';
const ADD_ORGANISM = 'ADD_ORGANISM'

const initialState = [];

const getOrganisms = organisms => ({ type: GET_ORGANISMS, organisms });
const addOrganism = organism => ({ type: ADD_ORGANISM, organism });

export const getOrganismsThunk = () =>
  dispatch =>
    axios.get('/api/organisms')
      .then( (organisms) => dispatch(getOrganisms(organisms.data)))
      .catch(err => console.log(err));

export const addOrganismThunk = (data) =>
dispatch =>
  axios.post(`/api/organisms`, data)
    .then(res => {
      dispatch(addOrganism(res.data))
    })
    .catch(err => console.log(err));

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ORGANISMS:
      return action.organisms;
    case ADD_ORGANISM:
      return [...state, action.organism]; // Adds new org to state
    default:
      return state;
  }
}
