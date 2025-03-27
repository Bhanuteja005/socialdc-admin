import { Box, Button, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import Card from "components/card/Card.js";

export default function UpsellOpportunities(props) {
  const { data } = props;
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const boxBg = useColorModeValue("gray.50", "navy.700"); // Move Hook to component level
  
  return (
    <Card p='20px'>
      <Text color={textColor} fontSize='lg' fontWeight='700' mb='20px'>
        Upsell Opportunities
      </Text>
      
      {data.map((item, index) => (
        <Box 
          key={index} 
          mb={index === data.length - 1 ? '0px' : '20px'}
          p='15px'
          borderRadius='10px'
          bg={boxBg} // Use the value from the Hook
        >
          <Flex justify='space-between' mb='10px'>
            <Text fontSize='sm' fontWeight='700' color={textColor}>
              {item.name}
            </Text>
            <Text fontSize='sm' color='gray.500'>
              ID: {item.customerId}
            </Text>
          </Flex>
          
          <Flex justify='space-between' mb='10px'>
            <Text fontSize='sm' color='gray.500'>
              Current Plan: {item.currentPlan}
            </Text>
            <Text fontSize='sm' color='gray.500'>
              Suggested: {item.suggestedPlan}
            </Text>
          </Flex>
          
          <Flex justify='space-between' align='center'>
            <Text fontSize='sm' color='green.500' fontWeight='700'>
              +₹{item.potentialValue}/yr
            </Text>
            <Button size='sm' colorScheme='brand'>
              Contact
            </Button>
          </Flex>
        </Box>
      ))}
    </Card>
  );
}
