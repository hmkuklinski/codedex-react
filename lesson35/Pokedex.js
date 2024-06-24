import { useState, useEffect } from "react";

export default function Pokedex() {
  //set state for pokemonList and filteredPokemonList
  const [pokemonList, setPokemonList]= useState([]);
  const [filteredPokemonList, setFilteredPokemonList]= useState([]);

  useEffect(function () {
    async function fetchData() {
      try {
        //fetch data from api
        const response= await fetch("https://pokeapi.co/api/v2/pokemon?limit=50");
        //if no response--> throw error
        if (response.ok ===false){
          throw new Error("Cannot fetch data");
        }
        //response was successful--> get data and turn it into json format
        const data = await response.json();

        //start with empty list
        const pokemonDataList = [];
        //for loop to get info on pokemon for display--> in results name and url 
        for (const pokemon of data.results) {
          //url has another API call for info on image
          const pokemonResponse = await fetch(pokemon.url);
          const pokemonData = await pokemonResponse.json();
          //add to pokemon data list
          pokemonDataList.push(pokemonData);
        } 
      //set the pokemonList and filteredPokemonList to include all the pokemon from API
      setPokemonList(pokemonDataList);
      setFilteredPokemonList(pokemonDataList);
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    }
    //call the function
    fetchData();
  }, []);

  function handleFilterChange(event) {
    //get searchTerm --> what user types in input (onChange)
    const searchTerm = event.target.value.toLowerCase();
    //create variable to store the filtered pokemon that fit the desired filter
    //use filter function to filter based on name (using toLowerCase to ensure same capitalization for comparison, that it matches the starting letter(s) of search term)
    const filteredList = pokemonList.filter(function(pokemon){
      return pokemon.name.toLowerCase().startsWith(searchTerm.toLowerCase())
    })

    // set the filtered list to the list that was filtered (previously set as raw data)
    setFilteredPokemonList(filteredList)
  }

  return (
    <div>
      <h1>Pokemon List</h1>
      <div>
        <input
          type="text"
          placeholder="Search Pokemon..."
          onChange={handleFilterChange}
        />
      </div>
      <ul>
        {filteredPokemonList.map(function (pokemon, index) {
          return (
            <li key={index} className="pokemon">
              <p>
                {pokemon.id}.{" "}
                {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
              </p>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
