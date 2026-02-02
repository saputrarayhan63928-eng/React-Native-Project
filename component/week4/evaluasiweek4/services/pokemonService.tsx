import { pokeApi } from "../API/pokeApi";
import { PokemonDetail, PokemonListResponse } from "../types/pokemon";

export async function fetchPokemonList(){
    const response = await pokeApi.get<PokemonListResponse>(
        '/pokemon?limit=20&offset=0'
    )
    return response.data.results
}

export async function fetchPokemonDetail (name: string){
    const response = await pokeApi.get<PokemonDetail>(`/pokemon/${name}`)
    return response.data
}