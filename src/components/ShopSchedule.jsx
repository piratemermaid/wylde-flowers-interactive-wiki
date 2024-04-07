import React from 'react';
import {
  Box,
  HStack,
  SimpleGrid,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';

import { shops } from '../data/shops';

const days = ['M', 'TU', 'W', 'TH', 'F', 'SA', 'SU'];

export default function ShopSchedule() {
  const getShopSchedules = () => {
    let schedules = { M: [], TU: [], W: [], TH: [], F: [], SA: [], SU: [] };

    for (let shop of shops) {
      for (let day of days) {
        const isOpen = !shop.closures.includes(day);
        schedules[day].push({
          name: shop.name,
          owner: shop.owner,
          open: isOpen,
        });
      }
    }

    return schedules;
  };

  const shopSchedules = React.useMemo(() => getShopSchedules());

  const { colorMode } = useColorMode();
  const dayLabelColor = useColorModeValue('secondary.500', 'secondary.300');
  const openShopColor = useColorModeValue('green.400', 'green.500');
  const closedShopColor = useColorModeValue('red.400', 'red.600');

  return (
    <>
      <Text fontSize="lg" sx={{ mb: 5 }}>
        Shop Schedules
      </Text>

      <SimpleGrid columns={7} spacing={2}>
        {Object.keys(shopSchedules).map((day) => {
          return (
            <Box>
              <Text
                fontSize="lg"
                color={dayLabelColor}
                fontWeight={700}
                sx={{ mb: 2 }}
              >
                {day}
              </Text>
              {shopSchedules[day].map(({ name, owner, open }) => {
                return (
                  <Box
                    key={name}
                    sx={{
                      backgroundColor: open ? openShopColor : closedShopColor,
                      borderBottom: `1px solid ${
                        colorMode === 'dark' ? 'black' : 'white'
                      }`,
                    }}
                  >
                    {name}
                  </Box>
                );
              })}
            </Box>
          );
        })}
      </SimpleGrid>
    </>
  );
}
