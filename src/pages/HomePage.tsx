import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GameGrid from "../components/main/GameGrid";
import GameHeading from "../components/main/GameHeading";
import PlatformSelector from "../components/main/PlatformSelector";
import SortSelector from "../components/main/SortSelector";
import GenreList from "../components/SideBar/GenreList";

function HomePage() {
  return (
    <Grid
      templateAreas={{
        base: `"main" `,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "180px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX="10px">
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingX="15px">
          <GameHeading />
          <HStack spacing={5}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default HomePage;
