import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface SearchInputProps {
  onSearch: (searchText: string) => void;
}

function SearchInput({ onSearch }: SearchInputProps) {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          border={20}
          placeholder="Search games..."
          variant="filled"
        ></Input>
      </InputGroup>
    </form>
  );
}

export default SearchInput;
