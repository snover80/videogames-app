import { useQuery } from "@tanstack/react-query";
import { APIClient } from "../services/api-client";
import type Screenshot from "../entities/Screenshot";

const useScrennshots = (gameId: number) => {
  const screenshotService = new APIClient<Screenshot>(
    `/games/${gameId}/screenshots`
  );
  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: screenshotService.getAll,
  });
};

export default useScrennshots;
