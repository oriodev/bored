export interface CircleState {
  red: { visible: boolean; speed: number; amount: number; complete: () => void};
  orange: { visible: boolean; speed: number; amount: number; complete: () => void  };
  yellow: { visible: boolean; speed: number; amount: number; complete: () => void  };
  green: { visible: boolean; speed: number; amount: number; complete: () => void  };
  blue: { visible: boolean; speed: number; amount: number; complete: () => void  };
  pink: { visible: boolean; speed: number; amount: number; complete: () => void  };
  purple: { visible: boolean; speed: number; amount: number; complete: () => void  };
}

export type CircleColor = 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'pink' | 'purple';