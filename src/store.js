import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useStore = create(
  persist(
    (set) => ({
      notes: '',
      setNotes: (newNotes) => {
        return set({ notes: newNotes });
      },
    }),
    {
      name: 'persistedStore',
    }
  )
);
