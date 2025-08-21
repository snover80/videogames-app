import { Box, Heading } from "@chakra-ui/react";
import React, { type ReactNode } from "react";
interface DefinitionItemProps {
  term: string;
  children: ReactNode | ReactNode[];
}
function DefinitionItem({ term, children }: DefinitionItemProps) {
  return (
    <Box marginY={5}>
      <Heading as="dt" fontSize="medium" color="gray.600">
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
}

export default DefinitionItem;
