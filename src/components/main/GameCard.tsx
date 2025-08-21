import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";

import PlatformList from "./PlatformList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../../services/image-url";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";
import type { Game } from "../../entities/Game";

interface GameCarProps {
  game: Game;
}
function GameCard({ game }: GameCarProps) {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <CardBody>
        <Heading fontSize="lg">
          <Link to={`/games/${game.slug}`}>{game.name}</Link>
          <Emoji rating={game.rating_top} />
        </Heading>
        <HStack justifyContent="space-between">
          <PlatformList platforms={game.parent_platforms} />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
}

export default GameCard;
