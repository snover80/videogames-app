import { useQuery } from "@tanstack/react-query";

import { APIClient, type FetchResponse } from "../services/api-client";

import platforms from "../data/platforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const platformService = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery<FetchResponse<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: platformService.getAll,

    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: platforms.length, next: null, results: platforms },
  });

export default usePlatforms;
