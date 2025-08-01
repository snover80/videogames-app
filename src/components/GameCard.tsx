import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";

import type { Game } from "../hooks/useGames";
import PlatformList from "./PlatformList";

interface GameCarProps {
  game: Game;
}
function GameCard({ game }: GameCarProps) {
  return (
    <Card borderRadius="10px" overflow="hidden">
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize="lg">{game.name}</Heading>
        <PlatformList platforms={game.parent_platforms} />
      </CardBody>
    </Card>
  );
}

export default GameCard;
