import { Heading } from "@chakra-ui/react";
import type { GameQuery } from "../../App";
import useGenre from "../../hooks/useGenre";
import usePlatforms from "../../hooks/usePlatforms";
import usePlatform from "../../hooks/usePlatform";

interface GameHeadingProps {
  gameQuery: GameQuery;
}

function GameHeading({ gameQuery }: GameHeadingProps) {
  const { data: genres } = useGenre();
  const platform = usePlatform(gameQuery.platformId);

  const genre = genres.results.find((genre) => {
    genre.id === gameQuery.genreId;
  });
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading marginBottom={5} as="h1">
      {heading}
    </Heading>
  );
}

export default GameHeading;
