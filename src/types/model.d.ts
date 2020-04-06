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
      title: string; // '인기 토픽' | '시설' | '찾는 목적' | '분위기'
      tags: string[];
    }[];
    menus: {
      popular: boolean;
      name: string;
      price: number;
      currency: 'KRW' | 'USD';
    }[];
    telephone: string;
    opening_hours: {
      range: 'WEEKDAY' | 'WEEKEND' | 'HOLIDAY' | DAY; // 요일
      type: 'OPEN' | 'DAY_OFF';
      time?: Time;
      breakTime?: Time;
    }[];
    coordinate: {
      latitude: number;
      longitude: number;
    };
  }
}
