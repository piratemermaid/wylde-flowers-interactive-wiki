export const days = ['M', 'TU', 'W', 'TH', 'F', 'SA', 'SU'];

export const shops = [
  {
    name: 'Blacksmith',
    owner: 'Natalia',
    closures: ['TU', 'SU'],
  },
  {
    name: 'Jeweler',
    owner: 'Francis',
    closures: ['M', 'TU', 'SU'],
  },
  {
    name: 'Bakery',
    owner: 'Angus',
    closures: ['W', 'SU'],
  },
  {
    name: 'Flower Shop',
    owner: 'Violet',
    closures: ['M', 'SU'],
  },
  {
    name: 'Carpenter',
    owner: 'Parker',
    closures: ['SA', 'SU'],
  },
  {
    name: 'General Store',
    owner: 'Lina',
    closures: ['TH', 'SU'],
  },
  {
    name: "Kai's Treasures",
    owner: 'Kai',
    closures: ['M', 'W', 'TH'],
  },
  {
    name: 'Fish Shop',
    owner: 'Bruno',
    closures: ['M', 'F', 'SU'],
  },
  {
    name: 'Diner',
    owner: 'Sophia',
    closures: ['M', 'SA'],
  },
  {
    name: 'Doctor',
    owner: 'Amira',
    closures: ['M', 'F', 'SU'],
  },
  {
    name: 'Ranch',
    owner: 'Marty',
    closures: ['TH', 'F', 'SA'],
  },
  {
    name: 'MLM',
    owner: 'Cameron',
    closures: ['W', 'F'],
  },
  {
    name: 'Bar',
    owner: 'Damon',
    closures: ['TU', 'SU'],
  },
  {
    name: "Aryel's Shop",
    owner: 'Aryel',
    closures: ['M', 'TU'],
  },
  {
    name: 'Apothecary',
    owner: 'Peri',
    closures: ['M', 'TU'],
  },
  {
    name: "Westley's Shop",
    owner: 'Westley',
    closures: ['TU', 'W'],
  },
  {
    name: "Zephyr's Shop",
    owner: 'Zephyr',
    closures: ['M', 'TU'],
  },
];

export const shopSchedulesByDay = {
  M: [
    {
      name: 'Blacksmith',
      owner: 'Natalia',
      open: true,
    },
    {
      name: 'Jeweler',
      owner: 'Francis',
      open: false,
    },
    {
      name: 'Bakery',
      owner: 'Angus',
      open: true,
    },
    {
      name: 'Flower Shop',
      owner: 'Violet',
      open: false,
    },
    {
      name: 'Carpenter',
      owner: 'Parker',
      open: true,
    },
    {
      name: 'General Store',
      owner: 'Lina',
      open: true,
    },
    {
      name: "Kai's Treasures",
      owner: 'Kai',
      open: false,
    },
    {
      name: 'Fish Shop',
      owner: 'Bruno',
      open: false,
    },
    {
      name: 'Diner',
      owner: 'Sophia',
      open: false,
    },
    {
      name: 'Doctor',
      owner: 'Amira',
      open: false,
    },
    {
      name: 'Ranch',
      owner: 'Marty',
      open: true,
    },
    {
      name: 'MLM',
      owner: 'Cameron',
      open: true,
    },
    {
      name: 'Bar',
      owner: 'Damon',
      open: true,
    },
    {
      name: "Aryel's Shop",
      owner: 'Aryel',
      open: false,
    },
    {
      name: 'Apothecary',
      owner: 'Peri',
      open: false,
    },
    {
      name: "Westley's Shop",
      owner: 'Westley',
      open: true,
    },
    {
      name: "Zephyr's Shop",
      owner: 'Zephyr',
      open: false,
    },
  ],
  TU: [
    {
      name: 'Blacksmith',
      owner: 'Natalia',
      open: false,
    },
    {
      name: 'Jeweler',
      owner: 'Francis',
      open: false,
    },
    {
      name: 'Bakery',
      owner: 'Angus',
      open: true,
    },
    {
      name: 'Flower Shop',
      owner: 'Violet',
      open: true,
    },
    {
      name: 'Carpenter',
      owner: 'Parker',
      open: true,
    },
    {
      name: 'General Store',
      owner: 'Lina',
      open: true,
    },
    {
      name: "Kai's Treasures",
      owner: 'Kai',
      open: true,
    },
    {
      name: 'Fish Shop',
      owner: 'Bruno',
      open: true,
    },
    {
      name: 'Diner',
      owner: 'Sophia',
      open: true,
    },
    {
      name: 'Doctor',
      owner: 'Amira',
      open: true,
    },
    {
      name: 'Ranch',
      owner: 'Marty',
      open: true,
    },
    {
      name: 'MLM',
      owner: 'Cameron',
      open: true,
    },
    {
      name: 'Bar',
      owner: 'Damon',
      open: false,
    },
    {
      name: "Aryel's Shop",
      owner: 'Aryel',
      open: false,
    },
    {
      name: 'Apothecary',
      owner: 'Peri',
      open: false,
    },
    {
      name: "Westley's Shop",
      owner: 'Westley',
      open: false,
    },
    {
      name: "Zephyr's Shop",
      owner: 'Zephyr',
      open: false,
    },
  ],
  W: [
    {
      name: 'Blacksmith',
      owner: 'Natalia',
      open: true,
    },
    {
      name: 'Jeweler',
      owner: 'Francis',
      open: true,
    },
    {
      name: 'Bakery',
      owner: 'Angus',
      open: false,
    },
    {
      name: 'Flower Shop',
      owner: 'Violet',
      open: true,
    },
    {
      name: 'Carpenter',
      owner: 'Parker',
      open: true,
    },
    {
      name: 'General Store',
      owner: 'Lina',
      open: true,
    },
    {
      name: "Kai's Treasures",
      owner: 'Kai',
      open: false,
    },
    {
      name: 'Fish Shop',
      owner: 'Bruno',
      open: true,
    },
    {
      name: 'Diner',
      owner: 'Sophia',
      open: true,
    },
    {
      name: 'Doctor',
      owner: 'Amira',
      open: true,
    },
    {
      name: 'Ranch',
      owner: 'Marty',
      open: true,
    },
    {
      name: 'MLM',
      owner: 'Cameron',
      open: false,
    },
    {
      name: 'Bar',
      owner: 'Damon',
      open: true,
    },
    {
      name: "Aryel's Shop",
      owner: 'Aryel',
      open: true,
    },
    {
      name: 'Apothecary',
      owner: 'Peri',
      open: true,
    },
    {
      name: "Westley's Shop",
      owner: 'Westley',
      open: false,
    },
    {
      name: "Zephyr's Shop",
      owner: 'Zephyr',
      open: true,
    },
  ],
  TH: [
    {
      name: 'Blacksmith',
      owner: 'Natalia',
      open: true,
    },
    {
      name: 'Jeweler',
      owner: 'Francis',
      open: true,
    },
    {
      name: 'Bakery',
      owner: 'Angus',
      open: true,
    },
    {
      name: 'Flower Shop',
      owner: 'Violet',
      open: true,
    },
    {
      name: 'Carpenter',
      owner: 'Parker',
      open: true,
    },
    {
      name: 'General Store',
      owner: 'Lina',
      open: false,
    },
    {
      name: "Kai's Treasures",
      owner: 'Kai',
      open: false,
    },
    {
      name: 'Fish Shop',
      owner: 'Bruno',
      open: true,
    },
    {
      name: 'Diner',
      owner: 'Sophia',
      open: true,
    },
    {
      name: 'Doctor',
      owner: 'Amira',
      open: true,
    },
    {
      name: 'Ranch',
      owner: 'Marty',
      open: false,
    },
    {
      name: 'MLM',
      owner: 'Cameron',
      open: true,
    },
    {
      name: 'Bar',
      owner: 'Damon',
      open: true,
    },
    {
      name: "Aryel's Shop",
      owner: 'Aryel',
      open: true,
    },
    {
      name: 'Apothecary',
      owner: 'Peri',
      open: true,
    },
    {
      name: "Westley's Shop",
      owner: 'Westley',
      open: true,
    },
    {
      name: "Zephyr's Shop",
      owner: 'Zephyr',
      open: true,
    },
  ],
  F: [
    {
      name: 'Blacksmith',
      owner: 'Natalia',
      open: true,
    },
    {
      name: 'Jeweler',
      owner: 'Francis',
      open: true,
    },
    {
      name: 'Bakery',
      owner: 'Angus',
      open: true,
    },
    {
      name: 'Flower Shop',
      owner: 'Violet',
      open: true,
    },
    {
      name: 'Carpenter',
      owner: 'Parker',
      open: true,
    },
    {
      name: 'General Store',
      owner: 'Lina',
      open: true,
    },
    {
      name: "Kai's Treasures",
      owner: 'Kai',
      open: true,
    },
    {
      name: 'Fish Shop',
      owner: 'Bruno',
      open: false,
    },
    {
      name: 'Diner',
      owner: 'Sophia',
      open: true,
    },
    {
      name: 'Doctor',
      owner: 'Amira',
      open: false,
    },
    {
      name: 'Ranch',
      owner: 'Marty',
      open: false,
    },
    {
      name: 'MLM',
      owner: 'Cameron',
      open: false,
    },
    {
      name: 'Bar',
      owner: 'Damon',
      open: true,
    },
    {
      name: "Aryel's Shop",
      owner: 'Aryel',
      open: true,
    },
    {
      name: 'Apothecary',
      owner: 'Peri',
      open: true,
    },
    {
      name: "Westley's Shop",
      owner: 'Westley',
      open: true,
    },
    {
      name: "Zephyr's Shop",
      owner: 'Zephyr',
      open: true,
    },
  ],
  SA: [
    {
      name: 'Blacksmith',
      owner: 'Natalia',
      open: true,
    },
    {
      name: 'Jeweler',
      owner: 'Francis',
      open: true,
    },
    {
      name: 'Bakery',
      owner: 'Angus',
      open: true,
    },
    {
      name: 'Flower Shop',
      owner: 'Violet',
      open: true,
    },
    {
      name: 'Carpenter',
      owner: 'Parker',
      open: false,
    },
    {
      name: 'General Store',
      owner: 'Lina',
      open: true,
    },
    {
      name: "Kai's Treasures",
      owner: 'Kai',
      open: true,
    },
    {
      name: 'Fish Shop',
      owner: 'Bruno',
      open: true,
    },
    {
      name: 'Diner',
      owner: 'Sophia',
      open: false,
    },
    {
      name: 'Doctor',
      owner: 'Amira',
      open: true,
    },
    {
      name: 'Ranch',
      owner: 'Marty',
      open: false,
    },
    {
      name: 'MLM',
      owner: 'Cameron',
      open: true,
    },
    {
      name: 'Bar',
      owner: 'Damon',
      open: true,
    },
    {
      name: "Aryel's Shop",
      owner: 'Aryel',
      open: true,
    },
    {
      name: 'Apothecary',
      owner: 'Peri',
      open: true,
    },
    {
      name: "Westley's Shop",
      owner: 'Westley',
      open: true,
    },
    {
      name: "Zephyr's Shop",
      owner: 'Zephyr',
      open: true,
    },
  ],
  SU: [
    {
      name: 'Blacksmith',
      owner: 'Natalia',
      open: false,
    },
    {
      name: 'Jeweler',
      owner: 'Francis',
      open: false,
    },
    {
      name: 'Bakery',
      owner: 'Angus',
      open: false,
    },
    {
      name: 'Flower Shop',
      owner: 'Violet',
      open: false,
    },
    {
      name: 'Carpenter',
      owner: 'Parker',
      open: true,
    },
    {
      name: 'General Store',
      owner: 'Lina',
      open: false,
    },
    {
      name: "Kai's Treasures",
      owner: 'Kai',
      open: true,
    },
    {
      name: 'Fish Shop',
      owner: 'Bruno',
      open: false,
    },
    {
      name: 'Diner',
      owner: 'Sophia',
      open: true,
    },
    {
      name: 'Doctor',
      owner: 'Amira',
      open: false,
    },
    {
      name: 'Ranch',
      owner: 'Marty',
      open: true,
    },
    {
      name: 'MLM',
      owner: 'Cameron',
      open: true,
    },
    {
      name: 'Bar',
      owner: 'Damon',
      open: false,
    },
    {
      name: "Aryel's Shop",
      owner: 'Aryel',
      open: true,
    },
    {
      name: 'Apothecary',
      owner: 'Peri',
      open: true,
    },
    {
      name: "Westley's Shop",
      owner: 'Westley',
      open: true,
    },
    {
      name: "Zephyr's Shop",
      owner: 'Zephyr',
      open: true,
    },
  ],
};
