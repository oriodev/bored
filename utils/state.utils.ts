import { CIRCLE_STATE_DEFAULT_DATA, NUMBER_DEFAULT_DATA, PRESTIGE_DEFAULT_DATA } from "@/app/data/gamestate.data";
import { PrestigeState, SetCircleState, SetNumber, SetPrestige } from "@/types";

export const setToDefault = (
  setNumber: SetNumber,
  setCircleState: SetCircleState,
  setPrestige: SetPrestige
) => {
  setCircleState(CIRCLE_STATE_DEFAULT_DATA)
  setPrestige(PRESTIGE_DEFAULT_DATA)
  setNumber(NUMBER_DEFAULT_DATA);
}

export const prestigeReset = (
  setCircleState: SetCircleState,
  setPrestige: SetPrestige
) => {
  setCircleState(CIRCLE_STATE_DEFAULT_DATA)

  setPrestige((prev: PrestigeState) => ({
    prestigeMultiplier: prev.prestigeMultiplier + 1,
    prestigeReq: prev.prestigeReq * 10,
    prestigeAvailable: false,
  }))
}