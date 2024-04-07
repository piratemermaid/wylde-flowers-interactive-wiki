import { Button, useColorMode, useColorModeValue } from '@chakra-ui/react';

import ShopSchedule from './components/ShopSchedule';
import './styles/App.css';

function App() {
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

      <ShopSchedule />
    </>
  );
}

export default App;
