// src/data/products.js
export const products = [
  // Featured Products - Top Section
  {
    id: 1,
    name: 'Pixel 10 Pro',
    description: 'Meet the new status pro.',
    price: '₹1,09,999',
    monthlyPrice: 'From ₹4,166.62/mo',
    image: 'https://s3-ap-southeast-2.amazonaws.com/wc-prod-pim/JPEG_1000x1000/GP10PX256M_google_pixel_10_pro_xl_256g_moonstone.jpg',
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
    image: 'https://m.media-amazon.com/images/I/61g25OOZCJL._UF1000,1000_QL80_.jpg',
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
    image: 'https://www.designinfo.in/wp-content/uploads/2020/12/Google-Pixel-10-Pro-Fold-5G-Moonstone-7-485x485-optimized.webp',
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



// Legal Disclaimers and Footnotes
export const legalDisclaimers = {
  pixelWatch: {
    id: 1,
    text: "Works with most phones running on Android 11.0 or newer. Requires Google Account, Google Pixel Watch app, and internet access. Some features require a Fitbit mobile app and/or paid subscription. Google apps and services and Fitbit Premium content and features are subject to change and may not be available in all countries or languages. Google Pixel Watch is not compatible with Android (Go edition). See g.co/pixelwatch/specs for technical and device specifications."
  },
  fitbitRequirements: {
    id: 2,
    text: "Requires Fitbit mobile app, a Google Account, compatible Android device, and internet connection. Fitbit Premium content and features may change. Content recommendations are not available in all countries and may be in English only."
  },
  fitbitPremiumOffer: {
    id: 4,
    text: "With eligible device purchases. New and returning Fitbit Premium members only. Must activate membership within 60 days of device activation. Valid method of payment required. Auto-renews at ₹99.00/month after expiry of 6-month membership unless cancelled earlier. Cancel anytime. Content and features may change, are not available in all countries and may be in English only. See g.co/pixelwatch/fitbitpremium-tos for more details."
  },
  googleServices: {
    id: 5,
    text: "Google apps and services require LTE or a paired phone within Bluetooth range of your device and are not available in all countries or languages. Data rates may apply."
  }
};

export const disclaimerFootnotes = [
  {
    id: 1,
    text: "Works with most phones running on Android 11.0 or newer. Requires Google Account, Google Pixel Watch app, and internet access. Some features require a Fitbit mobile app and/or paid subscription. Google apps and services and Fitbit Premium content and features are subject to change and may not be available in all countries or languages. Google Pixel Watch is not compatible with Android (Go edition). See g.co/pixelwatch/specs for technical and device specifications."
  },
  {
    id: 2,
    text: "Requires Fitbit mobile app, a Google Account, compatible Android device, and internet connection. Fitbit Premium content and features may change. Content recommendations are not available in all countries and may be in English only."
  },
  {
    id: 4,
    text: "With eligible device purchases. New and returning Fitbit Premium members only. Must activate membership within 60 days of device activation. Valid method of payment required. Auto-renews at ₹99.00/month after expiry of 6-month membership unless cancelled earlier. Cancel anytime. Content and features may change, are not available in all countries and may be in English only. See g.co/pixelwatch/fitbitpremium-tos for more details."
  },
  {
    id: 5,
    text: "Google apps and services require LTE or a paired phone within Bluetooth range of your device and are not available in all countries or languages. Data rates may apply."
  }
];

// Footer Sections Data
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
  ]
};

export const socialMediaLinks = [
  
  {
    name: 'Twitter',
    url: 'https://twitter.com',
    icon: 'https://img.icons8.com/?size=100&id=cMRBi0rI3iwb&format=png&color=000000'
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com',
    icon: 'https://img.icons8.com/?size=100&id=GEBzwByLyRUr&format=png&color=4D4D4D'
  },
  {
    name: 'Facebook',
    url: 'https://facebook.com',
    icon: 'https://img.icons8.com/?size=100&id=8818&format=png&color=4D4D4D'
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com',
    icon: 'https://img.icons8.com/?size=100&id=GmXJpb87D1Wb&format=png&color=4D4D4D'
  }
];


// Helper functions
export const getFeaturedProducts = () => products.filter(product => product.featured);
export const getProductsByCategory = (category) => products.filter(product => product.category === category);
export const getNewArrivals = () => products.filter(product => product.badge === 'New');
export const getComingSoon = () => products.filter(product => product.badge === 'Coming soon');
export const getLegalDisclaimer = (id) => legalDisclaimers[id];
export const getAllFootnotes = () => disclaimerFootnotes;

export default {
  products,
  navigationItems,
  dealsBanner,
  fitbitSection,
  comingSoonProducts,
  accessories,
  fitbitPremium,
  footerSections,
  legalDisclaimers,
  disclaimerFootnotes,
  getFeaturedProducts,
  getProductsByCategory,
  getNewArrivals,
  getComingSoon,
  getLegalDisclaimer,
  getAllFootnotes
};