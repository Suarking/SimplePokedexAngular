export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  moves: any[];
  types: any[];
  sprites: {
    front_default: string;
  };
}
