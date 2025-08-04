import { HStack, List, ListItem, Image, Text, Spinner } from "@chakra-ui/react";
import useGenre from "../../hooks/useGenre";
import getCroppedImageUrl from "../../services/image-url";

function GenreList() {
  const { data, isLoading, error } = useGenre();

  if (error) return null;
  if (isLoading) return <Spinner size="lg" />;
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
