


export interface CultDay {
    id: number;
    day: string;
    times: string[];
    description: string;
    extra?: { time: string; description: string } | string;
  }
  