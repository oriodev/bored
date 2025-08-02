export interface CircleState {
  red: Circle;
  orange: Circle;
  yellow: Circle;
  green: Circle;
  blue: Circle;
  pink: Circle;
  purple: Circle;
}

export interface Circle {
  colour: CircleColor;
  unlocked: boolean; 
  unlockedReq: CircleColor | null; 
  auto: boolean;
  autoReq: number;
  speed: number;
  speedMultipier: number;
  costMultiplier: number;
  upgradesUnlocked: number;
  numberMultiplier: number; 
}

export type CircleColor = 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'pink' | 'purple';

export interface PrestigeStore {
  prestige: number;
  prestigeReq: number;
  prestigeAvailable: boolean;
}