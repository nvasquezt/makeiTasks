import './App.css';
import Pokemondata from './assets/pokemondata.json'
import PokemonCard from './components/PokemonCard/PokemonCard.jsx'

function App() {
  return (
    <body>
      <div className="containerPokemon">      
      {Pokemondata.map((pokemoncito,idx)=>(
          <PokemonCard key={idx} eachPokemon={pokemoncito}/>
        )
      )}
      </div>
    </body>
    
  );
}

export default App;