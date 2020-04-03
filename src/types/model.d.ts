declare module '@model' {
  export interface Restaurant {
    id: string;
    photoUrl: string;
    status: 'PENDING' | 'ACTIVE' | 'SUSPENDED';
    name: string;
    address: string;
    tags: string[];
  }
}
