import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import GameGrid from "./components/main/GameGrid";
import GameHeading from "./components/main/GameHeading";
import PlatformSelector from "./components/main/PlatformSelector";
import SortSelector from "./components/main/SortSelector";
import NavBar from "./components/NavBar";
import GenreList from "./components/SideBar/GenreList";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sort: string | null;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main" `,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "180px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX="10px">
            <GenreList
              onSelectGenre={(genre) => {
                setGameQuery({ ...gameQuery, genreId: genre.id });
              }}
              selectedGenreId={gameQuery.genreId}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box paddingX="15px">
            <GameHeading gameQuery={gameQuery} />
            <HStack spacing={5}>
              <PlatformSelector
                onSelectPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platformId: platform.id })
                }
                selectedPlatformId={gameQuery.platformId}
              />
              <SortSelector
                onSelectSort={(sort) => setGameQuery({ ...gameQuery, sort })}
                selectedSort={gameQuery.sort}
              />
            </HStack>
          </Box>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
