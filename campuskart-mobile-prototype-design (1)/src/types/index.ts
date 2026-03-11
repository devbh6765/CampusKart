export interface Listing {
  id: string;
  title: string;
  category: Category;
  type: ListingType;
  price: number;
  description: string;
  image: string;
  seller: string;
  sellerAvatar: string;
  postedAt: string;
}

export interface Request {
  id: string;
  title: string;
  description: string;
  requester: string;
  requesterAvatar: string;
  postedAt: string;
  urgent: boolean;
}

export type Category = 'Books' | 'Electronics' | 'Hostel Essentials' | 'Services' | 'Rentals';
export type ListingType = 'For Sale' | 'For Rent' | 'Service';

export type Screen = 'login' | 'home' | 'browse' | 'post' | 'requests' | 'profile' | 'detail' | 'post-request';
