import pokemons from './App'
import "Pokecard.css"
const img_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

const Pokecard = (props) => {
    let image = `${img_API}${props.id}.png`
  return (
    <div className="pokemonCard">
        <h2>{props.name}</h2>
        <img src={image} alt="" />
    </div>
    )

}

export default Pokecard