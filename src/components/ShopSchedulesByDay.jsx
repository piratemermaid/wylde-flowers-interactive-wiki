import {
  GridItem,
  SimpleGrid,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';

import { shopSchedulesByDay } from '../data/shops';

export default function ShopSchedulesByDay({ selectedDay }) {
  const shops = shopSchedulesByDay[selectedDay];

  const openShopColor = useColorModeValue('green.400', 'green.500');
  const closedShopColor = useColorModeValue('red.400', 'red.600');

  return (
    <>
      <VStack spacing={1}>
        {shops.map(({ name, owner, open }) => {
          return (
            <SimpleGrid
              key={name}
              columns={2}
              sx={{
                backgroundColor: open ? openShopColor : closedShopColor,
                width: 60,
              }}
            >
              <GridItem sx={{ textAlign: 'left', ml: 2 }}>{name}</GridItem>
              <GridItem sx={{ textAlign: 'right', mr: 2 }}>{owner}</GridItem>
            </SimpleGrid>
          );
        })}
      </VStack>
    </>
  );
}
