import Pokecard from './Pokecard'

const Pokedex = ({ pokemons }) => { 

  return (
    <div>
    <h1>I am the pokedex</h1>
    {pokemons.map(p => <Pokecard
                            id={p.id} 
                            name={p.name}
                            type={p.type}
                            exp={p.base_experience}
                            />)}

    </div>
  )
}

export default Pokedex
