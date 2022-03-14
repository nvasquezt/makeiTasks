import './App.css';
import UserProfile from './components/UserProfile/UserProfile.jsx'
import Pokemondata from './assets/pokemondata.json'
import PokemonCard from './components/PokemonCard/PokemonCard.jsx'
import PropsClass from './components/PropsClass/PropsClass'

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
      <div>
        <PropsClass />
      </div>
    </body>
    
  );
}

export default App;