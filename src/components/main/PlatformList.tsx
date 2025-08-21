import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

import { HStack, Icon } from "@chakra-ui/react";
import type { IconType } from "react-icons";
import type { Platform } from "../../entities/Platform";

interface PlatformListProps {
  platforms: { platform: Platform }[];
}

function PlatformList({ platforms }: PlatformListProps) {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    nintendo: SiNintendo,
    web: BsGlobe,
  };
  return (
    <>
      <HStack marginY="10px">
        {platforms.map(({ platform }) => (
          <Icon
            key={platform.id}
            as={iconMap[platform.slug]}
            color="gray.500"
            data-testid={platform.slug}
          />
        ))}
      </HStack>
    </>
  );
}

export default PlatformList;
