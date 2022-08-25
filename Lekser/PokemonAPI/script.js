const PokeId = document.querySelector(".id")
const PokeImg = document.querySelector(".pokemonImg")
const PokeTitle = document.querySelector(".pokemonTitle")
const PokeDesc = document.querySelector(".pokemonDesc")
const NextBtn = document.querySelector(".nextBtn")


const fetchPokemon = async () => {
    try {
        const random = Math.floor(Math.random() * 1000 ) + 1;
        const pokeurl = 'https://pokeapi.co/api/v2/pokemon/' + random
        const pokeResponse = await fetch(pokeurl)
        const pokeData     = await pokeResponse.json()
        
        const speciesurl = 'https://pokeapi.co/api/v2/pokemon-species/' + random
        const speciesResponse = await fetch(speciesurl)
        const speciesData     = await speciesResponse.json()

        console.log(pokeData);
    
        PokeImg.src = pokeData.sprites.other.dream_world.front_default
        PokeId.textContent = "ID: " + pokeData.id
        PokeTitle.textContent = pokeData.name
        PokeDesc.textContent = speciesData.flavor_text_entries.find(e => e.language.name === "en").flavor_text   

    } catch ( err ) {
        console.error( err.message );
    }
}
NextBtn.addEventListener("click", fetchPokemon)
fetchPokemon();