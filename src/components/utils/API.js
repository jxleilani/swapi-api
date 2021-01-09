import Axios from 'axios';

export default function getStarships() {
  return Axios.get('https://swapi.dev/api/starships/');
}