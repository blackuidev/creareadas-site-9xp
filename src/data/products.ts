export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Luxury Sedan S-Class',
    description: 'Experience ultimate comfort and performance.',
    price: 120000,
    imageUrl: 'https://images.unsplash.com/photo-1605335801932-843e93b2a24c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Sedan',
  },
  {
    id: '2',
    name: 'Electric SUV E-Trail',
    description: 'Eco-friendly, powerful, and ready for adventure.',
    price: 95000,
    imageUrl: 'https://images.unsplash.com/photo-1621257962137-d2d89052a5f4?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'SUV',
  },
  {
    id: '3',
    name: 'Sport Coupe GT-Pro',
    description: 'Dynamic driving and stunning aesthetics combined.',
    price: 150000,
    imageUrl: 'https://images.unsplash.com/photo-1605559424160-b6f709115d40?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Coupe',
  },
  {
    id: '4',
    name: 'High-Performance Laptop X1',
    description: 'Next-gen processing for gaming and professional use.',
    price: 3200,
    imageUrl: 'https://images.unsplash.com/photo-1616422736733-14902166925c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Electronics',
  },
  {
    id: '5',
    name: 'Premium Wireless Headphones Alpha',
    description: 'Immersive sound and noise cancellation.',
    price: 450,
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06f2e2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Electronics',
  },
  {
    id: '6',
    name: 'Luxury Convertible Z-Ride',
    description: 'Feel the wind, enjoy the open road with elegance.',
    price: 135000,
    imageUrl: 'https://images.unsplash.com/photo-1502877338531-925704a259c2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Convertible',
  },
  {
    id: '7',
    name: 'Smartwatch Titan',
    description: 'Track your fitness, stay connected.',
    price: 300,
    imageUrl: 'https://images.unsplash.com/photo-1546868871-70028e3b62f2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Electronics',
  },
  {
    id: '8',
    name: 'Professional DSLR Camera ProCam',
    description: 'Capture breathtaking moments with precision.',
    price: 2500,
    imageUrl: 'https://images.unsplash.com/photo-1502920514319-ee5188417578?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Electronics',
  },
];
