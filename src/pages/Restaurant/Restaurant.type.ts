export interface RestaurantProps {
  imageUrl: string;
  status: 'PENDING' | 'ACTIVE' | 'SUSPENDED';
  name: string;
  address: string;
  categories: string[];
}
