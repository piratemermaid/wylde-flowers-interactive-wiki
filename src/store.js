import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useStore = create(
  persist(
    (set, get) => ({
      notes: '',
      setNotes: (newNotes) => {
        return set({ notes: newNotes });
      },

      favoriteShops: [],
      toggleFavoriteShop: (shop) => {
        const favoriteShops = get().favoriteShops;
        let newFavoriteShops;

        if (favoriteShops.includes(shop)) {
          newFavoriteShops = favoriteShops.filter((fshop) => fshop !== shop);
        } else {
          newFavoriteShops = [...favoriteShops, shop];
        }

        return set({ favoriteShops: newFavoriteShops });
      },
    }),
    {
      name: 'persistedStore',
    }
  )
);
