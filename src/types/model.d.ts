declare module '@model' {
  type Status = 'ACTIVE' | 'WAITING_FOR_REVIEW' | 'REMOVED';

  export interface RestaurantShort {
    id: string;
    photoUrl: string;
    status: Status;
    name: string;
    address: string;
    categories: string[];
    coordinate: {
      latitude: number;
      longitude: number;
    };
  }

  export interface Restaurant {
    id: string;
    photoUrl: string;
    status: Status;
    name: string;
    address: string;
    tags: string[];
  }
}
