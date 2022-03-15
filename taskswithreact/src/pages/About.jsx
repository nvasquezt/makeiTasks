import { Link } from 'react-router-dom';
import PokemonCard from '../components/PokemonCard/PokemonCard';
import Pokemondata from '../assets/pokemondata.json';
import './About.css';

function AboutPage() {
  return (
    <div>
      <h1>About</h1>
      <Link to="/">Go to Home</Link>
      <div className="containerPokemon">
        {Pokemondata.map((pokemoncito) => (
          <PokemonCard key={pokemoncito.id} eachPokemon={pokemoncito} />
        ))}
      </div>
    </div>
  );
}

export default AboutPage;
