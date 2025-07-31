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
  colour: string;
  unlocked: boolean; 
  unlockedReq?: number; 
  auto: boolean;
  autoReq?: number;
  speed: number;
  speedMultipier: number;
  costMultiplier: number;
  upgradesUnlocked: number;
  amount: number; 
  complete: () => void;
}

export type CircleColor = 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'pink' | 'purple';