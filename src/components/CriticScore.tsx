import { Badge } from "@chakra-ui/react";

interface CriticScoreProps {
  score: number;
}
function CriticScore({ score }: CriticScoreProps) {
  let color = score > 80 ? "green" : score > 60 ? "yellow" : "red";
  return (
    <Badge
      colorScheme={color}
      borderRadius="3px"
      paddingX="5px"
      fontSize="14px"
    >
      {score}
    </Badge>
  );
}

export default CriticScore;
