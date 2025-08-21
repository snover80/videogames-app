import { useQuery } from "@tanstack/react-query";

import ms from "ms";
import { APIClient } from "../services/api-client";
import type { Game } from "../entities/Game";

const gamesService = new APIClient<Game>("/games");
const useGame = (gameSlug: string) => {
  return useQuery<Game>({
    queryKey: ["games", gameSlug],
    queryFn: () => gamesService.get(gameSlug),

    staleTime: ms("24h"),
  });
};

export default useGame;
