

export interface ScheduleWeek  {
    id: string;
    day: string;
    programming: {
      time: string;
      description: string;
      observation?: string;
      imageMinisterio?: string;
    }[];
    extra?: {
      time: string;
      description: string;
      observation?: string;
      imageMinisterio?: string;
    }[];
  };
  