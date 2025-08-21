import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface GameCardContainerProps {
  children: ReactNode;
}

function GameCardContainer({ children }: GameCardContainerProps) {
  return (
    <Box
      _hover={{
        transform: "scale(1.03)",
        transition: "transform .15s ease-in",
      }}
      borderRadius="10px"
      overflow="hidden"
    >
      {children}
    </Box>
  );
}

export default GameCardContainer;
