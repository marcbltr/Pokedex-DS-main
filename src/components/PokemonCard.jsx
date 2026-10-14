import React from 'react'

export const PokemonCard = ({ pokemon, onAgregar, onQuitar }) => {
        const image = pokemon.sprites.other['official-artwork'].front_default
        
    return (
        <article>
            <img src={image} alt={pokemon.name} width="200"/>
            <h2>#{pokemon.id} {pokemon.name}</h2>
            <ul className='tipos'>
                {pokemon.types.map((type) => (
                    <li key={type.type.name}>{type.type.name}</li>
                ))}
            </ul>
            <p>Altura: {pokemon.height/10}m - Peso: {pokemon.weight/10}kg</p>
            {onAgregar && <button onClick={() => onAgregar(pokemon)}>Agregar</button>}
            {onQuitar && <button onClick={() => onQuitar(pokemon)}>Quitar</button>}
        </article>
    )
}