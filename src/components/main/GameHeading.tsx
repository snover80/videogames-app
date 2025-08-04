import { Heading } from "@chakra-ui/react";
import type { GameQuery } from "../../App";

interface GameHeadingProps {
  gameQuery: GameQuery;
}

function GameHeading({ gameQuery }: GameHeadingProps) {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return (
    <Heading marginBottom={5} as="h1">
      {heading}
    </Heading>
  );
}

export default GameHeading;
