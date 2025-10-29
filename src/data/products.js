// src/data/products.js
export const products = [
  // Featured Products - Top Section
  {
    id: 1,
    name: 'Pixel 10 Pro',
    description: 'Meet the new status pro.',
    price: '₹1,09,999',
    monthlyPrice: 'From ₹4,166.62/mo',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
    badge: 'New',
    category: 'phones',
    offer: 'with no-cost EMI & instant savings',
    featured: true
  },
  {
    id: 2,
    name: 'Pixel Buds Pro 2',
    description: 'Light ears ahead.',
    price: '₹22,900',
    monthlyPrice: '₹1,029.84/mo',
    image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=400&h=400&fit=crop',
    badge: 'New',
    category: 'earbuds',
    offer: 'with low-cost EMI',
    featured: true
  },
  {
    id: 3,
    name: 'Pixel 10 Pro Fold',
    description: 'Unfold extraordinary.',
    price: '₹1,72,999',
    monthlyPrice: '₹6,791.62/mo',
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop',
    badge: 'New',
    category: 'phones',
    offer: 'with no-cost EMI & instant savings',
    featured: true
  },

  // Watches & Trackers Section
  {
    id: 4,
    name: 'Google Pixel Watch 4',
    description: 'Precision crafted. Performance ready.',
    price: '₹39,900',
    monthlyPrice: 'From ₹1,794.34/mo',
    image: 'https://d2lfcsub12kx0l.cloudfront.net/tw/product/img/Google_google-pixel-watch-4-45mm_0821100721112_360x270.jpg',
    badge: 'Coming soon',
    category: 'watches',
    offer: 'with low-cost EMI',
    featured: true,
    tagline: 'Pixel Watch 4 is coming soon.'
  },
  {
    id: 5,
    name: 'Google Pixel Watch 3',
    description: 'Your most advanced fitness watch yet.',
    price: '₹34,999',
    monthlyPrice: 'From ₹1,574.34/mo',
    image: 'https://m.media-amazon.com/images/I/61-JMO7a6+L.jpg',
    badge: '',
    category: 'watches',
    offer: 'with low-cost EMI',
    featured: true
  },
  {
    id: 6,
    name: 'Fitbit Charge 6',
    description: 'Redefine your routine.',
    price: '₹15,999',
    image: 'https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/27465398/2024/2/9/8eaed2d2-e3c1-403b-ae4e-d8e71c797b5b1707453347607FitbitCharge6ProcelainSilverAlluminium1.jpg',
    badge: '',
    category: 'trackers',
    featured: true
  },
  {
    id: 7,
    name: 'Fitbit Sense 2',
    description: 'Manage stress and sleep better.',
    price: '₹22,999',
    image: 'https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/Sense_2_Stress_Animation_Black.gif',
    category: 'watches',
    featured: true
  },
  {
    id: 8,
    name: 'Fitbit Versa 4',
    description: 'Designed for fitness.',
    price: '₹19,999',
    image: 'https://static.helioswatchstore.com/media/catalog/product/f/b/fb523bkbk_1_2.jpg',
    category: 'watches',
    featured: true
  },
  {
    id: 9,
    name: 'Fitbit Inspire 3',
    description: 'Slim fitness tracker with 10-day battery.',
    price: '₹8,999',
    image: 'https://www.cureka.com/wp-content/uploads/2023/04/Fitbit-FB424BKYW-FRCJK-Smart-Watch-493178966-i-1-1200Wx1200H-600x600.jpeg',
    category: 'trackers',
    featured: true
  },
  {
    id:10,
    name:'Compare',
    image:'https://lh3.googleusercontent.com/I7TOyZ4Km4pcDQhrNkcFcwx9XrFRx41-upct8LUkvEuE1R2FZC3JYwgWcbRQb5qBX-ToRd1Xmkuun4vN14h6dCJ133SoP2rqvg=s0',
    category:'compare'
  }
];

export const navigationItems = [
  'Phones',
  'Earbuds',
  'Watches & Trackers',
  'Accessories',
  'Offers',
  'Support'
];

export const dealsBanner = {
  text: "Serving up deals on the latest Pixel 10 Pro series this ICC Women's Cricket World Cup. Ends October 30.",
  cta: "Shop deals",
  active: true
};

export const fitbitSection = {
  title: "Fitbit Official Site for Activity Trackers & Smartwatches",
  description: "The Google Store is the home for all things Fitbit. Shop below or get help with your Fitbit account here.",
  tagline: "Pixel and Fitbit keep you moving."
};

export const comingSoonProducts = [
  'Google Pixel Watch 4',
  'Google Pixel Watch 3',
  'Fitbit Sense 2',
  'Fitbit Versa 4',
  'Fitbit Charge 6',
  'Fitbit Inspire 3'
];

export const accessories = [
  {
    id: 101,
    name: 'Bands',
    description: 'Style and power your watch or tracker.',
    image: 'https://images.unsplash.com/photo-1582735684188-833bbf5b15fb?w=400&h=400&fit=crop',
    category: 'bands'
  },
  {
    id: 102,
    name: 'Power cables and adapters',
    description: 'Keep your devices charged and ready.',
    image: 'https://images.unsplash.com/photo-1582735683969-68ef4006ce78?w=400&h=400&fit=crop',
    category: 'chargers'
  }
];

export const fitbitPremium = {
  title: 'Fitbit Premium',
  description: 'The full force of Fitbit at your fingertips.',
  features: [
    'Get advanced insights',
    'Personalised recommendations',
    'Energising workouts'
  ],
  cta: 'Learn more'
};

export const footerSections = {
  orders: [
    'EMI & Cashback',
    'Exchange program',
    'Payment methods',
    'Shipping options',
    'Managing an order',
    'Country availability'
  ],
  support: [
    'Help Centre',
    'Repairs',
    'Disability Support',
    'Fitbit support',
    'Contact Us'
  ],
  sustainability: [
    'Device recycling'
  ],
  legal: [
    'Privacy',
    'Google Nest Commitment to Privacy',
    'Sales Terms',
    'Terms of Service'
  ]
};

// Helper functions
export const getFeaturedProducts = () => products.filter(product => product.featured);
export const getProductsByCategory = (category) => products.filter(product => product.category === category);
export const getNewArrivals = () => products.filter(product => product.badge === 'New');
export const getComingSoon = () => products.filter(product => product.badge === 'Coming soon');

export default {
  products,
  navigationItems,
  dealsBanner,
  fitbitSection,
  comingSoonProducts,
  accessories,
  fitbitPremium,
  footerSections,
  getFeaturedProducts,
  getProductsByCategory,
  getNewArrivals,
  getComingSoon
};