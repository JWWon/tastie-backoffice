declare module '@model' {
  type Status = 'ACTIVE' | 'WAITING_FOR_REVIEW' | 'REMOVED';
  type DAY = 'MON' | 'TUE' | 'WED' | 'THUR' | 'FRI' | 'SAT' | 'SUN';

  interface Time {
    start: string; // HH:MM
    end: string;
  }

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
    photoUrls: string[];
    status: Status;
    name: string;
    address: string;
    categories: string[];
    keywords: {
      popular_topic: {
        label: '인기 토픽';
        tags: string[];
      };
      facility: {
        label: '시설';
        tags: string[];
      };
      purpose: {
        label: '방문 목적';
        tags: string[];
      };
      atmosphere: {
        label: '분위기';
        tags: string[];
      };
    };
    menus: {
      popular: boolean;
      name: string;
      price: number;
      currency: 'KRW' | 'USD';
    }[];
    telephone: string;
    openingHours: {
      range: 'WEEKDAY' | 'WEEKEND' | 'HOLIDAY' | DAY; // 요일
      type: 'OPEN' | 'DAY_OFF';
      time?: Time;
      breakTime?: Time;
    }[];
    coordinate: {
      latitude: number;
      longitude: number;
    };
    description: string;
  }
}
