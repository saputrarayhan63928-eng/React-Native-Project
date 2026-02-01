import { use, useEffect, useState } from "react";
import { fetchPokemonList } from "../services/pokemonService";
import { PokemonListItem } from "../types/pokemon";

export function usePokemonLIst(){
    const [data,setData] = useState<PokemonListItem[]>([])
    const [loading,setLoading] =useState(true)
    const [error,setError] = useState<string | null>(null)

    useEffect(() => {
        load()
    }, [])

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

    return {data,loading,error, reload:load}
}