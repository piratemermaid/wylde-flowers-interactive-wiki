import React from 'react';
import { Textarea } from '@chakra-ui/react';

import { useStore } from '../store';

export default function Notes() {
  const notes = useStore((state) => state.notes);
  const setNotes = useStore((state) => state.setNotes);

  return (
    <>
      <Textarea
        value={notes}
        onChange={(event) => setNotes(event.target.value)}
        placeholder="Take notes here"
        height="auto"
        size="sm"
        rows={30}
      />
    </>
  );
}
