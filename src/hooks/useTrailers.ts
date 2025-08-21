import { useQuery } from "@tanstack/react-query";
import { APIClient, type FetchResponse } from "../services/api-client";
import type { Trailer } from "../entities/Trailer";

const useTrailers = (gameId: number) => {
  const trailerService = new APIClient<Trailer>(`/games/${gameId}/movies`);
  return useQuery<FetchResponse<Trailer>>({
    queryKey: ["trailer", gameId],
    queryFn: trailerService.getAll,
  });
};

export default useTrailers;
