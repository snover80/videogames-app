import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { APIClient, type FetchResponse } from "../services/api-client";

import genres from "../data/genres";
import type Genre from "../entities/Genre";

const genreService = new APIClient<Genre>("/genres");
const useGenre = () => {
  return useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: genreService.getAll,
    staleTime: ms("24h"),
    initialData: { count: genres.length, next: null, results: genres },
  });
};

export default useGenre;
