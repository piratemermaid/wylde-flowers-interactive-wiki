import {
  GridItem,
  SimpleGrid,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

import { useStore } from '../store';
import { shopSchedulesByDay } from '../data/shops';

export default function ShopSchedulesByDay({ selectedDay }) {
  const favoriteShops = useStore((state) => state.favoriteShops);
  const toggleFavoriteShop = useStore((state) => state.toggleFavoriteShop);

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
                width: 80,
              }}
              fontWeight={favoriteShops.includes(name) ? 400 : 300}
            >
              <GridItem sx={{ textAlign: 'left' }}>
                <Text>
                  <IconButton
                    icon={<StarIcon />}
                    aria-label="Favorite shop"
                    color={
                      favoriteShops.includes(name)
                        ? 'secondary.700'
                        : 'gray.300'
                    }
                    sx={{ position: 'relative', bottom: 0.5, height: 3 }}
                    onClick={() => toggleFavoriteShop(name)}
                  />
                  {name}
                </Text>
              </GridItem>
              <GridItem sx={{ textAlign: 'right', mr: 2 }}>{owner}</GridItem>
            </SimpleGrid>
          );
        })}
      </VStack>
    </>
  );
}
