export interface Player {
  id: number;
  created_at: Date;
  name: string;
  is_ai: boolean;

  /**
   * @default 1000
   */
  money: number;
}

export let players: Player[] = [
  {
    id: 1,
    created_at: new Date(),
    // Favors the gaming options
    name: 'Gamer',
    is_ai: true,
    money: 1000,
  },
  {
    id: 2,
    created_at: new Date(),
    // Favors vowels ("lex" short for "lexicography")
    name: 'Lex',
    is_ai: true,
    money: 1000,
  },
  {
    id: 3,
    created_at: new Date(),
    // Favors larger places (i.e. mansions, castles)
    name: 'Big Man',
    is_ai: true,
    money: 1000,
  },
];
