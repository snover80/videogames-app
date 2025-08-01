import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Genre {
  id: string;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}
interface FetchGenreResponse {
  count: number;
  results: Genre[];
}

const useGenre = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
      const [error, setError] = useState("");
      const [isLoading, setLoading] = useState(false);
    
      useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        apiClient
          .get<FetchGenreResponse>("/genres", {signal: controller.signal})
          .then((response) => {
            setGenres(response.data.results);
            setLoading(false);
          })
          .catch((err) => {
            if(err instanceof CanceledError) return;
            setError(err.message) 
            setLoading(false)})
        return () => controller.abort();
      }, []);

      return {genres, error, isLoading}
}

export default useGenre;