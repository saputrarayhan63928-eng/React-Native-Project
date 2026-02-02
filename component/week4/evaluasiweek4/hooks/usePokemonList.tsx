import {useEffect, useState } from "react";
import { fetchPokemonList } from "../services/pokemonService";
import { PokemonListItem } from "../types/pokemon";

export function usePokemonList(){
    const [data,setData] = useState<PokemonListItem[]>([])
    const [loading,setLoading] =useState(true)
    const [error,setError] = useState<string | null>(null)

    
    const load = async () => {
        try{
            setLoading(true)
            setError(null)
            const result = await fetchPokemonList()
            setData(result)
        }
        catch{
            setError('Gagal mengambil Data Pokemon')
        } 
        finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        load()
    }, [])
    
    return {data,loading,error, reload:load}
}