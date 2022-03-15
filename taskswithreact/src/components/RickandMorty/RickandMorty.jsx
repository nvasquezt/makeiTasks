import { Link } from 'react-router-dom';
import dataRick from '../../assets/characters.json';

function RickandMorty() {
  return (
    <div>
      <h1>Personajes de Rick y Morty</h1>
      {
        dataRick.map((character) => (
          <div>
            <Link to={`/characterpage/${character.id}`}>{character.name}</Link>
          </div>
        ))
      }
    </div>
  );
}

export default RickandMorty;
