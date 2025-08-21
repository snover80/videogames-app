import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/main/ExpandableText";
import GameAttributes from "../components/main/GameAttributes";
import useGame from "../hooks/useGame";
import GameTrailer from "../components/main/GameTrailer";
import GameScreenShots from "../components/main/GameScreenShots";

function GameDetailPage() {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading>{game.name}</Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAttributes game={game} />
      </GridItem>
      <GridItem>
        <GameTrailer gameId={parseInt(game.id)} />
        <GameScreenShots gameId={parseInt(game.id)} />
      </GridItem>
    </SimpleGrid>
  );
}

export default GameDetailPage;
