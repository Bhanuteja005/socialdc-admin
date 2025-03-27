import { Flex, useColorModeValue } from "@chakra-ui/react";
import { HorizonLogo } from "components/icons/Icons";
import { HSeparator } from "components/separator/Separator";

export function SidebarBrand() {
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex align='center' direction='column' w='100%'>
      <Flex justify='center' align='center' w='100%'>
        <HorizonLogo h='26px' w='175px' my='16px' color={logoColor} />
      </Flex>
      <HSeparator mb='20px' />
    </Flex>
  );
}

export default SidebarBrand;