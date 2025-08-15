import { Grid, GridItem, HStack, Show, Box } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/main/GameGrid";
import GenreList from "./components/SideBar/GenreList";
import { useState } from "react";
import type { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/main/PlatformSelector";
import SortSelector from "./components/main/SortSelector";
import GameHeading from "./components/main/GameHeading";
import type { Platform } from "./hooks/usePlatforms";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
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
                setGameQuery({ ...gameQuery, genre });
              }}
              selectedGenre={gameQuery.genre}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box paddingX="15px">
            <GameHeading gameQuery={gameQuery} />
            <HStack spacing={5}>
              <PlatformSelector
                onSelectPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platform })
                }
                selectedPlatform={gameQuery.platform}
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
