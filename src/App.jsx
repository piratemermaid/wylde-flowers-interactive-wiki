import { Button, Text, useColorMode } from '@chakra-ui/react';

import './styles/App.css';

function App() {
  const { toggleColorMode } = useColorMode();

  return (
    <>
      <Button size="sm" colorScheme="blue" onClick={toggleColorMode}>
        Toggle Mode
      </Button>

      <Text fontSize="xl" color="primary.500">
        Hello
      </Text>
      <Text fontSize="xl" color="secondary.500">
        Hello
      </Text>
    </>
  );
}

export default App;
