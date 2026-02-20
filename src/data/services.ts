export interface ServiceTier {
  id: string;
  name: string;
  tagline: string;
  price: string;
  features: string[];
}

export const serviceTiers: ServiceTier[] = [
  {
    id: "essential",
    name: "Essential",
    tagline: "Best for courthouse & registry weddings",
    price: "€350",
    features: [
      "1 hour coverage",
      "Full ceremony documentation",
      "18 retouched images",
      "100 high-resolution originals",
    ],
  },
  {
    id: "signature",
    name: "Signature",
    tagline: "Elegant wedding portraits in curated locations",
    price: "€750",
    features: [
      "3 hour session",
      "2–3 locations",
      "35 retouched images",
      "200 high-resolution originals",
    ],
  },
  {
    id: "legacy",
    name: "Legacy",
    tagline: "Complete storytelling of your wedding day",
    price: "€1,750",
    features: [
      "8 hour coverage",
      "Documentary-style photography",
      "80 retouched images",
      "300 high-resolution originals",
    ],
  },
];
