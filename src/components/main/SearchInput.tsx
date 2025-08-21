import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../../store";
import { useNavigate } from "react-router-dom";

function SearchInput() {
  const setSearch = useGameQueryStore((s) => s.setSearchText);
  const ref = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        if (ref.current) {
          setSearch(ref.current.value);
          navigate("/");
        }
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
