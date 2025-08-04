import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./main/ColorModeSwitch";
import SearchInput from "./main/SearchInput";

interface NavBarProps {
  onSearch: (searchText: string) => void;
}

function NavBar({ onSearch }: NavBarProps) {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
