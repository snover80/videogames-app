import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface GameCardContainerProps {
  children: ReactNode;
}

function GameCardContainer({ children }: GameCardContainerProps) {
  return (
    <Box width="290px" borderRadius="10px" overflow="hidden">
      {children}
    </Box>
  );
}

export default GameCardContainer;
