import { Heading } from "@chakra-ui/react";
import useGenre from "../../hooks/useGenre";
import usePlatform from "../../hooks/usePlatform";
import useGameQueryStore from "../../store";

function GameHeading() {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
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
