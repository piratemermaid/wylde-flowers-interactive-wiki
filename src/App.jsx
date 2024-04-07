import React from 'react';
import {
  Box,
  Button,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';

import DaySelector from './components/DaySelector';
import DailyShopSchedules from './components/DailyShopSchedules';
import './styles/App.css';
import ShopSchedulesByDay from './components/ShopSchedulesByDay';

function App() {
  const [selectedDay, setSelectedDay] = React.useState(null);

  const { toggleColorMode } = useColorMode();

  const buttonColor = useColorModeValue('primary.300', 'primary.600');

  return (
    <>
      <Button
        size="sm"
        sx={{
          backgroundColor: buttonColor,
          position: 'absolute',
          right: 2,
          top: 2,
        }}
        onClick={toggleColorMode}
      >
        Toggle Dark Mode
      </Button>

      <Section>
        <SectionTitle title="Schedules By Day" />
        <DaySelector
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
        />

        {selectedDay ? <ShopSchedulesByDay selectedDay={selectedDay} /> : null}
      </Section>

      <Section>
        <SectionTitle title="Daily Shop Schedules" />
        <DailyShopSchedules selectedDay={selectedDay} />
      </Section>
    </>
  );
}

const Section = ({ children }) => {
  return <Box sx={{ mb: 6 }}>{children}</Box>;
};

const SectionTitle = ({ title }) => {
  return (
    <Text
      fontSize="lg"
      color="primary.200"
      sx={{ mb: 2, textTransform: 'uppercase' }}
    >
      {title}
    </Text>
  );
};

export default App;
