import { useState, useEffect } from "react";
import { fetchPokemonDetail } from "../services/pokemonService";
import { PokemonDetail } from "../types/pokemon";

export function usePokemonDetail(name: string){
    const [data,setData] = useState<PokemonDetail | null>(null)
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState<string | null>(null)

    useEffect(() =>{
        load()
    }, [name])

    const load = async () =>{
        try{
            setLoading(true)
            setError(null)
            const result = await fetchPokemonDetail(name)
            return result
        }
        catch{
            setError('Pokemon Tidak Ditemukan')
        }
        finally{
            setLoading(false)
        }
    }
    return {data,error,loading}
}