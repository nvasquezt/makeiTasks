import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllCharacters } from '../../services/characters';

function RickandMorty() {
  const [characters, setCharacters] = useState([]);
  const showCharacters = async () => {
    const listOfCharacters = await getAllCharacters();
    setCharacters(listOfCharacters);
  };
  useEffect(() => {
    showCharacters();
  }, []);
  return (
    <div>
      <h1>Personajes de Rick y Morty</h1>
      {
        characters.map((character) => (
          <div>
            <Link
              to={`/characterpage/${character.id}`}
            >
              <button type="button" className="characterButton">{character.name}</button>
            </Link>
          </div>
        ))
      }
    </div>
  );
}
export default RickandMorty;
