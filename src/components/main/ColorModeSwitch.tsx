import { HStack, Switch, useColorMode, Text } from "@chakra-ui/react";

function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch size="md" onChange={toggleColorMode}></Switch>
      <Text whiteSpace="nowrap">
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Text>
    </HStack>
  );
}

export default ColorModeSwitch;
