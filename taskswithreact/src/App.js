import './App.css';
import UserProfile from './components/UserProfile/UserProfile.jsx'
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
      
      <div>
        <UserProfile />
      </div>
      
    </body>
    
  );
}

export default App;