import pokemons from './App'

const Pokecard = (props) => {
  return (
    <div className="pokemonCard">
        <h2>{props.name}</h2>
    </div>
    )

}

export default Pokecard