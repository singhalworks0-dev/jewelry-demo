// Store data focusing on pure jewelry product & macro photography

export const ANNOUNCEMENT_ITEMS = [
  "Global Shipping",
  "Complimentary Returns",
  "Limited Production"
];

export const PRODUCTS = {
  "gulf-cuff": {
    id: "gulf-cuff",
    title: "Gulf Cuff",
    price: 84000,
    priceFormatted: "Rs. 84,000.00",
    category: "Wristwear",
    material: "Proprietary Bronze & Cognac Topazes, 24k Gold Plating",
    tagline: "Sculpted in bronze with hand-hammered texture and Cognac Topazes",
    featuredImage: "/images/gulf-cuff-editorial.jpg",
    images: [
      "/images/gulf-cuff-editorial.jpg",
      "/images/silfra-cuff-editorial.jpg"
    ]
  },
  "shoal-ring": {
    id: "shoal-ring",
    title: "Shoal Ring",
    price: 15000,
    priceFormatted: "Rs. 15,000.00",
    category: "Rings",
    material: "Proprietary Bronze & Natural Gemstones",
    tagline: "Fluid organic contours sculpted for tactile permanence",
    featuredImage: "/images/shoal-ring-editorial.jpg",
    images: [
      "/images/shoal-ring-editorial.jpg",
      "/images/haline-ring-editorial.jpg",
      "/images/isobar-ring-editorial.jpg"
    ]
  },
  "rogue-ring": {
    id: "rogue-ring",
    title: "Rogue Ring",
    price: 12500,
    priceFormatted: "Rs. 12,500.00",
    category: "Rings",
    material: "Proprietary Bronze",
    tagline: "Bold angular geometry defying conventional symmetry",
    featuredImage: "/images/rogue-ring-editorial.jpg",
    images: [
      "/images/rogue-ring-editorial.jpg",
      "/images/breaker-ring-editorial.jpg",
      "/images/shoal-ring-editorial.jpg"
    ]
  },
  "haline-ring": {
    id: "haline-ring",
    title: "Haline Ring",
    price: 8000,
    priceFormatted: "Rs. 8,000.00",
    category: "Rings",
    material: "Natural Gemstones & Bronze",
    tagline: "A refined band celebrating ocean salinity and calm stillness",
    featuredImage: "/images/haline-ring-editorial.jpg",
    images: [
      "/images/haline-ring-editorial.jpg",
      "/images/shoal-ring-editorial.jpg",
      "/images/isobar-ring-editorial.jpg"
    ]
  },
  "strait-earrings": {
    id: "strait-earrings",
    title: "Strait Earrings",
    price: 19000,
    priceFormatted: "Rs. 19,000.00",
    category: "Earrings",
    material: "Hand-cast Bronze with 24k Gold Dip",
    tagline: "Architectural drops that frame the jawline with subtle grace",
    featuredImage: "/images/strait-earrings-editorial.jpg",
    images: [
      "/images/strait-earrings-editorial.jpg",
      "/images/langmuir-earring-editorial.jpg"
    ]
  },
  "silfra-cuff": {
    id: "silfra-cuff",
    title: "Silfra Cuff",
    price: 68900,
    priceFormatted: "Rs. 68,900.00",
    category: "Wristwear",
    material: "Proprietary Bronze & Natural Quartz",
    tagline: "Inspired by tectonic fissures and subterranean clarity",
    featuredImage: "/images/silfra-cuff-editorial.jpg",
    images: [
      "/images/silfra-cuff-editorial.jpg",
      "/images/gulf-cuff-editorial.jpg"
    ]
  },
  "rossby-collar": {
    id: "rossby-collar",
    title: "Rossby Collar",
    price: 52000,
    priceFormatted: "Rs. 52,000.00",
    category: "Necklaces",
    material: "Proprietary Bronze & Hand-Set Stones",
    tagline: "Planetary wave curves crafted with millimeter precision",
    featuredImage: "/images/rossby-collar-editorial.jpg",
    images: [
      "/images/rossby-collar-editorial.jpg",
      "/images/le-morne-necklace-editorial.jpg"
    ]
  },
  "langmuir-earring": {
    id: "langmuir-earring",
    title: "Langmuir Earring",
    price: 12500,
    priceFormatted: "Rs. 12,500.00",
    category: "Earrings",
    material: "Natural Gemstones & Bronze",
    tagline: "Cellular circulation translated into weightless ear adornment",
    featuredImage: "/images/langmuir-earring-editorial.jpg",
    images: [
      "/images/langmuir-earring-editorial.jpg",
      "/images/strait-earrings-editorial.jpg"
    ]
  },
  "isobar-ring": {
    id: "isobar-ring",
    title: "Isobar Ring",
    price: 9800,
    priceFormatted: "Rs. 9,800.00",
    category: "Rings",
    material: "Proprietary Bronze",
    tagline: "Equal pressure curves cast into sculptured metal",
    featuredImage: "/images/isobar-ring-editorial.jpg",
    images: [
      "/images/isobar-ring-editorial.jpg",
      "/images/breaker-ring-editorial.jpg",
      "/images/shoal-ring-editorial.jpg"
    ]
  },
  "breaker-ring": {
    id: "breaker-ring",
    title: "Breaker Ring",
    price: 13800,
    priceFormatted: "Rs. 13,800.00",
    category: "Rings",
    material: "Proprietary Bronze",
    tagline: "The crest before the impact, frozen in heirloom form",
    featuredImage: "/images/breaker-ring-editorial.jpg",
    images: [
      "/images/breaker-ring-editorial.jpg",
      "/images/isobar-ring-editorial.jpg",
      "/images/rogue-ring-editorial.jpg"
    ]
  },
  "le-morne-necklace": {
    id: "le-morne-necklace",
    title: "Le Morne Necklace",
    price: 100000,
    priceFormatted: "Rs. 1,00,000.00",
    category: "Necklaces",
    material: "Natural Gemstones, Proprietary Bronze, 24k Gold",
    tagline: "The monumental cliff setting with an underwater waterfall motif",
    featuredImage: "/images/le-morne-necklace-editorial.jpg",
    images: [
      "/images/le-morne-necklace-editorial.jpg",
      "/images/rossby-collar-editorial.jpg"
    ]
  }
};

export const LOOKBOOK_ITEMS = [
  {
    id: 1,
    image: "/images/hero-gyre-campaign.jpg",
    spots: [
      { productId: "gulf-cuff", left: 50, top: 48, placement: "up" },
      { productId: "shoal-ring", left: 68, top: 65, placement: "up" }
    ]
  },
  {
    id: 2,
    image: "/images/shoal-ring-editorial.jpg",
    spots: [
      { productId: "shoal-ring", left: 48, top: 46, placement: "up" },
      { productId: "haline-ring", left: 62, top: 58, placement: "up" }
    ]
  },
  {
    id: 3,
    image: "/images/strait-earrings-editorial.jpg",
    spots: [
      { productId: "strait-earrings", left: 44, top: 40, placement: "up" },
      { productId: "langmuir-earring", left: 62, top: 54, placement: "up" }
    ]
  },
  {
    id: 4,
    image: "/images/rossby-collar-editorial.jpg",
    spots: [
      { productId: "rossby-collar", left: 52, top: 52, placement: "up" },
      { productId: "le-morne-necklace", left: 65, top: 42, placement: "up" }
    ]
  },
  {
    id: 5,
    image: "/images/rogue-ring-editorial.jpg",
    spots: [
      { productId: "rogue-ring", left: 45, top: 45, placement: "up" },
      { productId: "breaker-ring", left: 65, top: 62, placement: "up" }
    ]
  },
  {
    id: 6,
    image: "/images/gulf-cuff-editorial.jpg",
    spots: [
      { productId: "gulf-cuff", left: 38, top: 42, placement: "up" },
      { productId: "silfra-cuff", left: 66, top: 58, placement: "up" }
    ]
  },
  {
    id: 7,
    image: "/images/langmuir-earring-editorial.jpg",
    spots: [
      { productId: "langmuir-earring", left: 48, top: 46, placement: "up" },
      { productId: "strait-earrings", left: 66, top: 56, placement: "up" }
    ]
  },
  {
    id: 8,
    image: "/images/silfra-cuff-editorial.jpg",
    spots: [
      { productId: "silfra-cuff", left: 42, top: 48, placement: "up" },
      { productId: "isobar-ring", left: 64, top: 52, placement: "up" }
    ]
  }
];

export const HERO_SLIDES = [
  {
    id: "gyre",
    title: "GYRE",
    subtitle: "Spring/Summer 2026",
    subtext: "Every collection is archived whence claimed, never to be remade.",
    buttonText: "Discover The Collection",
    link: "/collections/the-gyre-collection",
    desktopImage: "/images/hero-gyre-campaign.jpg",
    mobileImage: "/images/hero-gyre-campaign.jpg"
  },
  {
    id: "wristwear",
    title: "WRISTWEAR",
    subtitle: "Created Unapologetically",
    subtext: "Crafted In India",
    buttonText: "Discover Wristwear",
    link: "/collections/wristwear",
    desktopImage: "/images/gulf-cuff-editorial.jpg",
    mobileImage: "/images/gulf-cuff-editorial.jpg"
  },
  {
    id: "earrings",
    title: "EARRINGS",
    subtitle: "For the self-assured, the unhurried.",
    subtext: "",
    buttonText: "Discover Earrings",
    link: "/collections/earrings",
    desktopImage: "/images/strait-earrings-editorial.jpg",
    mobileImage: "/images/strait-earrings-editorial.jpg"
  },
  {
    id: "rings",
    title: "RINGS",
    subtitle: "Objects worth obsessing over are rarely the loudest",
    subtext: "",
    buttonText: "Discover Rings",
    link: "/collections/rings",
    desktopImage: "/images/shoal-ring-editorial.jpg",
    mobileImage: "/images/shoal-ring-editorial.jpg"
  }
];

export const PHILOSOPHY_QUOTES = [
  {
    id: "frustration",
    text: "It began with frustration."
  },
  {
    id: "karigars",
    text: "Why are Indian Karigars globally unrecognized for their millennia of innovation and honed skills?"
  },
  {
    id: "segregation",
    text: "Why is jewellery segregated for men and women?"
  },
  {
    id: "techniques",
    text: "Why have centuries of coveted jewellers’ techniques been obliterated with industrial processes?"
  },
  {
    id: "manifesto",
    text: "VALOIR questions materials, shuns norms, challenges processes and pays homage to the history of worn objects through the strict category of Demi – Fine. Creations crafted with Natural Gemstones & Proprietary Bronze coupled with millennia of craftsmanship and skill handed down generations to build what has not been built."
  }
];

export const NAVIGATION_DATA = {
  mainMenu: [
    { label: "NEW", href: "/collections/new-additions" },
    {
      label: "JEWELLERY",
      href: "/collections/all-jewellery",
      hasMegaMenu: true,
      categories: [
        { label: "SHOP ALL", href: "/collections/all-jewellery" },
        { label: "NECKLACES", href: "/collections/necklaces" },
        { label: "EARRINGS", href: "/collections/earrings" },
        { label: "RINGS", href: "/collections/rings" },
        { label: "WRISTWEAR", href: "/collections/wristwear" },
        { label: "ANKLETS - coming soon", href: "#", disabled: true },
        { label: "BROOCHES - coming soon", href: "#", disabled: true },
        { label: "ODDITIES - coming soon", href: "#", disabled: true }
      ],
      featured: [
        {
          title: "Gulf Cuff",
          image: "https://images.unsplash.com/photo-1576053139778-7e32f2ae3cfd?auto=format&fit=crop&w=600&q=85",
          link: "/products/gulf-cuff"
        },
        {
          title: "Le Morne Necklace",
          image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=85",
          link: "/products/le-morne-necklace"
        }
      ]
    },
    {
      label: "COLLECTIONS",
      href: "/collections/the-gyre-collection",
      subItems: [
        { label: "Gyre S/S 2026", href: "/collections/the-gyre-collection" }
      ]
    },
    { label: "ABOUT", href: "/pages/about" },
    { label: "CONTACT", href: "/pages/contact" }
  ],
  footerLinks: {
    shop: [
      { label: "Necklaces", href: "/collections/necklaces" },
      { label: "Earrings", href: "/collections/earrings" },
      { label: "Rings", href: "/collections/rings" },
      { label: "Brooches", href: "/pages/coming-soon" },
      { label: "Anklets", href: "/pages/coming-soon" }
    ],
    company: [
      { label: "About Us", href: "/pages/about" },
      { label: "Care Guide", href: "/pages/care-guide" },
      { label: "FAQ", href: "/pages/faq" },
      { label: "Contact", href: "/pages/contact" },
      { label: "Track Your Order", href: "/pages/track-order" }
    ],
    legal: [
      { label: "Terms & Conditions", href: "/policies/terms-of-service" },
      { label: "Shipping Policy", href: "/policies/shipping-policy" },
      { label: "Return & Exchanges", href: "/policies/refund-policy" },
      { label: "Privacy & Cookie Policy", href: "/policies/privacy-policy" },
      { label: "REACH", href: "/pages/reach" }
    ]
  }
};
