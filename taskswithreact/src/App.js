import './App.css';
import UserProfile from './components/UserProfile/UserProfile';
import Pokemondata from './assets/pokemondata.json';
import PokemonCard from './components/PokemonCard/PokemonCard';
import PropsClass from './components/PropsClass/PropsClass';
import Clock from './components/Clock/Clock';
import Salary from './components/Salary/Salary';
import Travels from './components/Travels/Travels';
import OnionHater from './components/OnionHater/OnionHater';

function App() {
  return (
    <body>
      <div className="containerPokemon">
        {Pokemondata.map((pokemoncito) => (
          <PokemonCard key={pokemoncito.id} eachPokemon={pokemoncito} />
        ))}
      </div>
      <div>
        <UserProfile />
      </div>
      <div>
        <Clock />
      </div>
      <OnionHater />
      <Salary />
      <Travels />
      <div>
        <PropsClass />
      </div>
    </body>

  );
}

export default App;
