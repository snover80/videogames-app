import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";

interface SortSelectorProps {
  onSelectSort: (sortOrder: string) => void;
  selectedSort: string | null;
}

function SortSelector({ onSelectSort, selectedSort }: SortSelectorProps) {
  const sortingOptions = [
    {
      value: "",
      label: "Relevance",
    },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSortOrder = sortingOptions.find(
    (optionLabel) => optionLabel.value === selectedSort
  );
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        Order by: {currentSortOrder?.label}
      </MenuButton>
      <MenuList>
        {sortingOptions.map((option) => (
          <MenuItem
            onClick={() => onSelectSort(option.value)}
            key={option.value}
            value={option.value}
          >
            {option.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default SortSelector;
