import { Listing, Request } from '../types';

export const mockListings: Listing[] = [
  {
    id: '1',
    title: 'Engineering Mathematics Textbook',
    category: 'Books',
    type: 'For Sale',
    price: 350,
    description: 'Barely used, all chapters highlighted. Perfect for first-year students. Includes solved examples and practice problems.',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop',
    seller: 'Priya Sharma',
    sellerAvatar: 'PS',
    postedAt: '2 hours ago'
  },
  {
    id: '2',
    title: 'Portable Mini Fridge',
    category: 'Hostel Essentials',
    type: 'For Rent',
    price: 500,
    description: 'Rent per month. Works perfectly, great for keeping snacks and drinks cold. Available for the entire semester.',
    image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400&h=300&fit=crop',
    seller: 'Rahul Verma',
    sellerAvatar: 'RV',
    postedAt: '5 hours ago'
  },
  {
    id: '3',
    title: 'Python Programming Tutoring',
    category: 'Services',
    type: 'Service',
    price: 200,
    description: 'Per hour rate. CS major offering help with Python basics, data structures, and algorithms. Available evenings and weekends.',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=300&fit=crop',
    seller: 'Arjun Patel',
    sellerAvatar: 'AP',
    postedAt: '1 day ago'
  },
  {
    id: '4',
    title: 'Scientific Calculator (Casio fx-991)',
    category: 'Electronics',
    type: 'For Sale',
    price: 800,
    description: 'Brand new condition, bought last semester. Selling because switching to graphing calculator.',
    image: 'https://images.unsplash.com/photo-1564466809058-bf4114d55352?w=400&h=300&fit=crop',
    seller: 'Neha Gupta',
    sellerAvatar: 'NG',
    postedAt: '3 days ago'
  },
  {
    id: '5',
    title: 'Wireless Bluetooth Earbuds',
    category: 'Electronics',
    type: 'For Sale',
    price: 1200,
    description: 'Great sound quality, 8-hour battery life. Comes with original charging case and all accessories.',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=300&fit=crop',
    seller: 'Vikram Singh',
    sellerAvatar: 'VS',
    postedAt: '4 days ago'
  },
  {
    id: '6',
    title: 'Study Desk Lamp',
    category: 'Hostel Essentials',
    type: 'For Sale',
    price: 450,
    description: 'LED lamp with adjustable brightness. Perfect for late-night study sessions. Energy efficient.',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=300&fit=crop',
    seller: 'Ananya Das',
    sellerAvatar: 'AD',
    postedAt: '5 days ago'
  },
  {
    id: '7',
    title: 'Bicycle for Campus',
    category: 'Rentals',
    type: 'For Rent',
    price: 300,
    description: 'Monthly rent. Well-maintained gear cycle, perfect for getting around campus quickly. Lock included.',
    image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=400&h=300&fit=crop',
    seller: 'Karthik Reddy',
    sellerAvatar: 'KR',
    postedAt: '1 week ago'
  },
  {
    id: '8',
    title: 'Resume Writing Help',
    category: 'Services',
    type: 'Service',
    price: 150,
    description: 'Get your resume reviewed and polished by a senior with placement experience. Quick turnaround!',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop',
    seller: 'Meera Iyer',
    sellerAvatar: 'MI',
    postedAt: '1 week ago'
  }
];

export const mockRequests: Request[] = [
  {
    id: '1',
    title: 'Need calculator for exam tomorrow',
    description: 'Urgent! My calculator stopped working and I have a math exam tomorrow. Will return it right after.',
    requester: 'Amit Kumar',
    requesterAvatar: 'AK',
    postedAt: '30 mins ago',
    urgent: true
  },
  {
    id: '2',
    title: 'Looking for physics tutor',
    description: 'Need help with thermodynamics and wave optics. Willing to pay per session. Prefer someone from 3rd or 4th year.',
    requester: 'Sneha Reddy',
    requesterAvatar: 'SR',
    postedAt: '2 hours ago',
    urgent: false
  },
  {
    id: '3',
    title: 'Anyone have a guitar to lend?',
    description: 'Want to learn guitar this semester. Looking to borrow or rent one. Will take good care of it!',
    requester: 'Rohan Joshi',
    requesterAvatar: 'RJ',
    postedAt: '5 hours ago',
    urgent: false
  },
  {
    id: '4',
    title: 'Need room heater for winter',
    description: 'Looking to rent a room heater for the winter months. My room gets really cold at night.',
    requester: 'Pallavi Singh',
    requesterAvatar: 'PS',
    postedAt: '1 day ago',
    urgent: false
  },
  {
    id: '5',
    title: 'Looking for Data Structures notes',
    description: 'Missed a few classes due to medical reasons. Need comprehensive notes for DSA, especially trees and graphs.',
    requester: 'Varun Mehta',
    requesterAvatar: 'VM',
    postedAt: '2 days ago',
    urgent: true
  }
];

export const priceRanges: Record<string, { min: number; max: number }> = {
  'Books': { min: 150, max: 600 },
  'Electronics': { min: 500, max: 3000 },
  'Hostel Essentials': { min: 200, max: 1500 },
  'Services': { min: 100, max: 500 },
  'Rentals': { min: 200, max: 1000 }
};

export const restrictedWords = [
  'cigarette', 'cigarettes', 'smoke', 'smoking', 'tobacco',
  'drug', 'drugs', 'weed', 'marijuana', 'cannabis',
  'alcohol', 'beer', 'wine', 'whiskey', 'vodka', 'rum', 'liquor',
  'weapon', 'weapons', 'gun', 'knife', 'blade'
];
