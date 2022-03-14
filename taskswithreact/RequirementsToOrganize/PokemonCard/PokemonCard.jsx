import './PokemonCard.css'
function PokemonCard (props){
    const {name, order, image, stats, weight}= props.eachPokemon;
    const [hp,attack, defense, special]= stats;
  
    return(
        <section className="card">
            <img className="card__image" src={image} alt={name} />
            <h1 className="card__name">{name}</h1>
            <span className="card__numberof">Number: {order}</span><br />
            <span className="card__attack">{special.name}: {special.base_stat}</span><br />
            <span className="card__attack">{hp.name}: {hp.base_stat}</span><br />
            <span className="card__attack">{attack.name}: {attack.base_stat}</span><br />
            <span className="card__attack">{defense.name}: {defense.base_stat}</span><br />
            <span className="card__weight">Weight: {weight} kg.</span><br />
        </section>
    )
}

export default PokemonCard;
