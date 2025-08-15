import { useInfiniteQuery } from "@tanstack/react-query";
import type { GameQuery } from "../App";

import type { FetchResponse } from "../services/api-client";
import { APIClient } from "../services/api-client";
import type { Platform } from "./usePlatforms";

export interface Game {
  id: string;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const gamesService = new APIClient<Game>("/games");

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam }) =>
      gamesService.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sort,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });

export default useGames;
