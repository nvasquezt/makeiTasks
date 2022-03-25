import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleCharacter } from '../../services/characters';

function CharactersPage() {
  const { id } = useParams();
  const [character, setCharacter] = useState([]);
  const pageCharacter = async () => {
    const data = await getSingleCharacter(Number(id));
    setCharacter(data);
  };
  useEffect(() => {
    pageCharacter();
  }, []);
  const { name, image, status, species, gender, origin, location, created } = character;
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
