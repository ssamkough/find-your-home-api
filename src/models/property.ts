export interface Property {
  id: number;
  created_at: Date;
  name: string;

  /**
   * Foreign key to Player.id
   */
  owner_id?: number;
}

export let properties: Property[] = [
  {
    id: 1,
    created_at: new Date(),
    name: 'Colorful House',
  },
  {
    id: 2,
    created_at: new Date(),
    name: "Princess Peach's Castle",
  },
  {
    id: 3,
    created_at: new Date(),
    name: 'Eiffel Tower',
  },
  {
    id: 4,
    created_at: new Date(),
    name: 'Hyrule Castle',
  },
  {
    id: 5,
    created_at: new Date(),
    name: 'The White House',
  },
  {
    id: 6,
    created_at: new Date(),
    name: "Pallet Town Mom's House",
  },
  {
    id: 7,
    created_at: new Date(),
    name: 'Buckingham Palace',
  },
  {
    id: 8,
    created_at: new Date(),
    name: "Luigi's Mansion",
  },
  {
    id: 9,
    created_at: new Date(),
    name: 'Sydney Opera House',
  },
  {
    id: 10,
    created_at: new Date(),
    name: 'Stardew Valley Farm',
  },
];
