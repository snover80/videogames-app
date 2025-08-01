import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Game {
  id: string;
  name: string;
}
interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
      const [error, setError] = useState("");
      const [isLoading, setLoading] = useState(false);
    
      useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        apiClient
          .get<FetchGamesResponse>("/games", {signal: controller.signal})
          .then((response) => {
            setGames(response.data.results);
            setLoading(false);
          })
          .catch((err) => {
            if(err instanceof CanceledError) return;
            setError(err.message)})
          .finally(() => setLoading(false));
        return () => controller.abort();
      }, []);

      return {games, error, isLoading}
}

export default useGames;