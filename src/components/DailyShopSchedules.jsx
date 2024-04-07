import React from 'react';
import {
  Box,
  SimpleGrid,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';

import { shopSchedulesByDay } from '../data/shops';

export default function DailyShopSchedules() {
  const { colorMode } = useColorMode();
  const dayLabelColor = useColorModeValue('secondary.500', 'secondary.300');
  const openShopColor = useColorModeValue('green.400', 'green.500');
  const closedShopColor = useColorModeValue('red.400', 'red.600');

  return (
    <>
      <SimpleGrid columns={7} spacing={2}>
        {Object.keys(shopSchedulesByDay).map((day) => {
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
              {shopSchedulesByDay[day].map(({ name, owner, open }) => {
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
