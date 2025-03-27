import { Box, Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import Card from "components/card/Card.js";
import { MdAccessTime, MdCheckCircle, MdOutlineError } from "react-icons/md";

export default function RecentActivity(props) {
  const { data } = props;
  const textColor = useColorModeValue("secondaryGray.900", "white");

  const getStatusIcon = (status) => {
    switch(status) {
      case 'Completed': return { icon: MdCheckCircle, color: "green.500" };
      case 'Pending': return { icon: MdAccessTime, color: "orange.500" };
      case 'Support': return { icon: MdOutlineError, color: "red.500" };
      default: return { icon: MdCheckCircle, color: "gray.500" };
    }
  };

  return (
    <Card p='20px'>
      <Flex justify='space-between' mb='20px'>
        <Text color={textColor} fontSize='lg' fontWeight='700'>
          Recent Activity
        </Text>
        <Text color='brand.500' fontSize='sm' fontWeight='500' cursor='pointer'>
          View All
        </Text>
      </Flex>
      
      {data.map((item, index) => (
        <Flex key={index} mb={index === data.length - 1 ? '0px' : '16px'}>
          <Box minW='100%'>
            <Flex justify='space-between' mb='6px'>
              <Text fontSize='sm' fontWeight='700' color={textColor}>
                {item.name}
              </Text>
              <Flex align='center'>
                <Icon 
                  as={getStatusIcon(item.status).icon}
                  color={getStatusIcon(item.status).color}
                  w='20px'
                  h='20px'
                  me='6px'
                />
                <Text fontSize='sm' fontWeight='600' color={getStatusIcon(item.status).color}>
                  {item.status}
                </Text>
              </Flex>
            </Flex>
            <Text fontSize='sm' color='gray.500'>
              {item.action}
            </Text>
            <Text fontSize='xs' color='gray.400' mt='4px'>
              {item.timestamp}
            </Text>
          </Box>
        </Flex>
      ))}
    </Card>
  );
}
