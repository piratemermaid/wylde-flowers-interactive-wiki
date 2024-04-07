import { Card, CardBody, Center, HStack } from '@chakra-ui/react';

import { days } from '../data/shops';

export default function DaySelector({ selectedDay, setSelectedDay }) {
  return (
    <Center sx={{ mb: 4 }}>
      <HStack>
        {days.map((day) => {
          return (
            <Card
              key={day}
              sx={{
                cursor: 'pointer',
                height: 10,
                lineHeight: 0.1,
                backgroundColor:
                  selectedDay === day ? 'secondary.600' : 'gray.700',
              }}
              onClick={() => setSelectedDay(day)}
            >
              <CardBody>{day}</CardBody>
            </Card>
          );
        })}
      </HStack>
    </Center>
  );
}
