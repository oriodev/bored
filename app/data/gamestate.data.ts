import { CircleColor } from "@/types"

export const CIRCLE_STATE_DEFAULT_DATA = {
    red: { 
      colour: 'red' as CircleColor,
      unlocked: true, 
      unlockOnAuto: 'orange' as CircleColor, // what u unlock, not who unlocks u
      auto: false, // is it spinning?
      autoReq: 5, // upgrades required to make this circle spin
      speed: 1, // base speed for manual, switches to 10 on auto
      speedMultipier: 0.75, // how much faster the speed gets on upgrade: remember 0 is fastest
      costMultiplier: 1.1, // how much more expensive upgrades get
      upgradesUnlocked: 0, // increases when u press the red button, how many upgrades u have bought
      numberMultiplier: 1, // how many numbers this circle gets on rotation
      baseCost: 5,
    },
    orange: {
      colour: 'orange' as CircleColor, 
      unlocked: false, 
      unlockOnAuto: 'yellow' as CircleColor,
      auto: false, 
      autoReq: 5,
      speed: 2, 
      speedMultipier: 0.8,
      costMultiplier: 1.15,
      upgradesUnlocked: 0,
      numberMultiplier: 5, 
      baseCost: 10,
    },
    yellow: { 
      colour: 'yellow' as CircleColor,
      unlocked: false, 
      unlockOnAuto: 'green' as CircleColor,
      auto: false, 
      autoReq: 5,
      speed: 3, 
      speedMultipier: 0.85,
      costMultiplier: 1.2,
      upgradesUnlocked: 0,
      numberMultiplier: 25,
      baseCost: 50,
    },
    green: { 
      colour: 'green' as CircleColor,
      unlocked: false, 
      unlockOnAuto: 'blue' as CircleColor,
      auto: false, 
      autoReq: 10,
      speed: 4, 
      speedMultipier: 0.87,
      costMultiplier: 1.225,
      upgradesUnlocked: 0,
      numberMultiplier: 75,
      baseCost: 150,
    },
    blue: { 
      colour: 'blue' as CircleColor,
      unlocked: false, 
      unlockOnAuto: 'pink' as CircleColor,
      auto: false, 
      autoReq: 15,
      speed: 5, 
      speedMultipier: 0.9,
      costMultiplier: 1.25,
      upgradesUnlocked: 0,
      numberMultiplier: 750,
      baseCost: 1500,
    },
    pink: { 
      colour: 'pink' as CircleColor,
      unlocked: false, 
      unlockOnAuto: 'purple' as CircleColor,
      auto: false, 
      autoReq: 15,
      speed: 6, 
      speedMultipier: 0.925,
      costMultiplier: 1.275,
      upgradesUnlocked: 0, 
      numberMultiplier: 50000, 
      baseCost: 100000,
    },
    purple: { 
      colour: 'purple' as CircleColor,
      unlocked: false, 
      unlockOnAuto: null,
      auto: false, 
      autoReq: 20,
      speed: 7, 
      speedMultipier: 0.95,
      costMultiplier: 1.3,
      upgradesUnlocked: 0,
      numberMultiplier: 500000,
      baseCost: 1500000,
    }
}

export const PRESTIGE_DEFAULT_DATA = {
  prestigeMultiplier: 1,
  prestigeReq: 100,
  prestigeAvailable: false
}

export const NUMBER_DEFAULT_DATA = 0;