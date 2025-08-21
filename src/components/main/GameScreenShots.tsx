import { Image, SimpleGrid } from "@chakra-ui/react";
import useScrennshots from "../../hooks/useScreenhots";

interface GameScreenShotsProps {
  gameId: number;
}

function GameScreenShots({ gameId }: GameScreenShotsProps) {
  const { data, isLoading, error } = useScrennshots(gameId);

  if (isLoading) return null;
  if (error) throw error;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3}>
      {data?.results.map((file) => (
        <Image key={file.id} src={file.image} />
      ))}
    </SimpleGrid>
  );
}

export default GameScreenShots;
