/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2023 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports
import {
  Box,
  Icon,
  SimpleGrid,
  useColorModeValue
} from "@chakra-ui/react";
// Assets
// Custom components
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import {
  MdCurrencyRupee,
  MdGroups,
  MdHandshake
} from "react-icons/md";
import ComplexTable from "views/admin/default/components/ComplexTable";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import PieCard from "views/admin/default/components/PieCard";
import TotalSpent from "views/admin/default/components/TotalSpent";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import {
  columnsDataComplex
} from "views/admin/default/variables/columnsData";
import tableDataComplex from "views/admin/default/variables/tableDataComplex.json";
import RecentActivity from "./components/RecentActivity";
import UpsellOpportunities from "./components/UpsellOpportunities";
import recentActivityData from "./variables/recentActivityData.json";
import upsellData from "./variables/upsellData.json";

export default function UserReports() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 4, "2xl": 4 }}
        gap='20px'
        mb='20px'>
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={<Icon w='32px' h='32px' as={MdCurrencyRupee} color={brandColor} />}
            />
          }
          name='Total Revenue'
          value='₹25,00,000'
          growth='+12.5%'
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={<Icon w='32px' h='32px' as={MdGroups} color={brandColor} />}
            />
          }
          name='New Leads'
          value='128'
          growth='+12.5%'
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={<Icon w='32px' h='32px' as={MdGroups} color={brandColor} />}
            />
          }
          name='Current Customers'
          value='845'
          growth='+12.5%'
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={<Icon w='32px' h='32px' as={MdHandshake} color={brandColor} />}
            />
          }
          name='Partner Commissions'
          value='₹85,000'
          growth='+12.5%'
        />
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
        <TotalSpent />
        <WeeklyRevenue />
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
        <RecentActivity data={recentActivityData} />
        <UpsellOpportunities data={upsellData} />
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
        <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px'>
          <PieCard />
          <DailyTraffic />
        </SimpleGrid>
        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        />
      </SimpleGrid>
    </Box>
  );
}
