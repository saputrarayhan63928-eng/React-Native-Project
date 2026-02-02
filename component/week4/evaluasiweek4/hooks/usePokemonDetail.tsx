import { useState, useEffect } from "react";
import { fetchPokemonDetail } from "../services/pokemonService";
import { PokemonDetail } from "../types/pokemon";

export function usePokemonDetail(name: string) {
  const [data, setData] = useState<PokemonDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = async () => {
    try {
      setLoading(true);
      setError(null);

      console.log('FETCH DETAIL NAME:', name);
      
      const result = await fetchPokemonDetail(name);
      console.log('DETAIL DATA:', data);
      setData(result);
    } catch (e){
        console.log('FETCH DETAIL ERROR:', e);
      setError('Pokemon Tidak Ditemukan');
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, [name]);

  return { data, error, loading };
}
