import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import type { Game } from "../hooks/useGames";

interface GameCarProps {
  game: Game;
}
function GameCard({ game }: GameCarProps) {
  return (
    <Card borderRadius="10px" overflow="hidden">
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize="lg">{game.name}</Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard;
