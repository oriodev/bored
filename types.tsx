export interface GameState {
  number: number;
  prestige: PrestigeState;
  circleState: CircleState;
  tutorialVisible: boolean;
}

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
  unlockOnAuto: CircleColor | null; 
  auto: boolean;
  autoReq: number;
  speed: number;
  speedMultipier: number;
  costMultiplier: number;
  upgradesUnlocked: number;
  numberMultiplier: number;
  baseCost: number;
}

export type CircleColor = 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'pink' | 'purple';

export interface PrestigeState {
  prestigeMultiplier: number;
  prestigeReq: number;
  prestigeAvailable: boolean;
}

export type SetNumber = (updater: number | ((prev: number) => number)) => void;
export type SetCircleState = (updater: CircleState | ((prev: CircleState) => CircleState)) => void;
export type SetPrestige = (updater: PrestigeState | ((prev: PrestigeState) => PrestigeState)) => void;
export type SetTutorialVisible = (updater: boolean | ((prev: boolean) => boolean)) => void;