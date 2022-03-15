import { useParams } from 'react-router-dom';
import dataCharacters from '../../assets/characters.json';

function CharactersPage() {
  const { id } = useParams();
  const info = dataCharacters.find((character) => character.id === Number(id));
  const { name, status, species, gender, origin, location, image, created } = info;

  return (
    <div>
      <h1>
        Personaje:
        {' '}
        {name}
      </h1>
      <img src={image} alt={name} />
      <br />
      <span>
        Status:
        {' '}
        {status}
      </span>
      <br />
      <span>
        Especie:
        {' '}
        {species}
      </span>
      <br />
      <span>
        Status:
        {' '}
        {status}
      </span>
      <br />
      <span>
        Genero:
        {' '}
        {gender}
      </span>
      <br />
      <span>
        Origen:
        {' '}
        {origin.name}
      </span>
      <br />
      <span>
        Locación:
        {' '}
        {location.name}
      </span>
      <br />
      <span>
        Creado:
        {' '}
        {created}
      </span>
    </div>
  );
}

export default CharactersPage;
