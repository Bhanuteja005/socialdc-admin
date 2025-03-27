// Chakra imports
import {
  Box,
  Flex,
  Select,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import Card from "components/card/Card.js";
// Custom components
import BarChart from "components/charts/BarChart";
import {
  barChartDataConsumption,
  barChartOptionsConsumption,
} from "variables/charts";

export default function WeeklyRevenue(props) {
  const { ...rest } = props;

  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const iconColor = useColorModeValue("brand.500", "white");
  const bgButton = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const bgHover = useColorModeValue(
    { bg: "secondaryGray.400" },
    { bg: "whiteAlpha.50" }
  );
  const bgFocus = useColorModeValue(
    { bg: "secondaryGray.300" },
    { bg: "whiteAlpha.100" }
  );
  return (
    <Card align='center' direction='column' w='100%' {...rest}>
      <Flex align='center' w='100%' px='15px' py='10px'>
        <Text
          me='auto'
          color={textColor}
          fontSize='xl'
          fontWeight='700'
          lineHeight='100%'>
          Customer Growth
        </Text>
        <Select
          fontSize='sm'
          variant='subtle'
          defaultValue='all'
          width='unset'
          fontWeight='700'>
          <option value='all'>All Time</option>
          <option value='monthly'>Monthly</option>
          <option value='yearly'>Yearly</option>
        </Select>
      </Flex>
      <Box h='240px' mt='auto'>
        <BarChart
          chartData={barChartDataConsumption}
          chartOptions={barChartOptionsConsumption}
        />
      </Box>
    </Card>
  );
}
