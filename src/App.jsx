import React from 'react';
import {
  Box,
  Button,
  SimpleGrid,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';

import DaySelector from './components/DaySelector';
import ShopSchedulesByDay from './components/ShopSchedulesByDay';
import Notes from './components/Notes';
import './styles/App.css';

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

      <SimpleGrid columns={2} spacing={10}>
        <Section>
          <SectionTitle title="Schedules By Day" />
          <DaySelector
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
          />

          {selectedDay ? (
            <ShopSchedulesByDay selectedDay={selectedDay} />
          ) : null}
        </Section>

        <Section>
          <SectionTitle title="Notes" />
          <Notes />
        </Section>
      </SimpleGrid>
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
