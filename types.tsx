export interface CircleState {
  red: { visible: boolean; speed: number; complete: () => void };
  orange: { visible: boolean; speed: number; complete: () => void  };
  yellow: { visible: boolean; speed: number; complete: () => void  };
  green: { visible: boolean; speed: number; complete: () => void  };
  blue: { visible: boolean; speed: number; complete: () => void  };
  pink: { visible: boolean; speed: number; complete: () => void  };
  purple: { visible: boolean; speed: number; complete: () => void  };
}