import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/main/GameGrid";
import GenreList from "./components/SideBar/GenreList";
import { useState } from "react";
import type { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/main/PlatformSelector";
import type { Platform } from "./hooks/useGames";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
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
          <NavBar></NavBar>
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX="10px">
            <GenreList
              onSelectGenre={(genre) => {
                setSelectedGenre(genre);
              }}
              selectedGenre={selectedGenre}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <PlatformSelector
            onSelectPlatform={(platform) => setSelectedPlatform(platform)}
            selectedPlatform={selectedPlatform}
          />
          <GameGrid
            selectedGenre={selectedGenre}
            selectedPlatform={selectedPlatform}
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
