export interface Wedding {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  location: string;
  coverImage: string;
  images: string[];
}

// Images are imported at usage site via dynamic imports
// Paths here are keys used for mapping to actual imports
export const weddings: Wedding[] = [
  {
    id: "1",
    slug: "elena-and-marco",
    title: "Elena & Marco",
    subtitle: "A sun-drenched celebration at a Tuscan villa",
    location: "Tuscany, Italy",
    coverImage: "wedding-cover-1",
    images: ["wedding-cover-1", "wedding-detail-1", "wedding-detail-2", "wedding-detail-3", "wedding-detail-4"],
  },
  {
    id: "2",
    slug: "sophie-and-julien",
    title: "Sophie & Julien",
    subtitle: "An intimate ceremony in candlelit elegance",
    location: "Provence, France",
    coverImage: "wedding-cover-2",
    images: ["wedding-cover-2", "wedding-detail-3", "wedding-detail-1", "wedding-detail-4", "wedding-detail-2"],
  },
  {
    id: "3",
    slug: "isabelle-and-thomas",
    title: "Isabelle & Thomas",
    subtitle: "Where the ocean met their love story",
    location: "Algarve, Portugal",
    coverImage: "wedding-cover-3",
    images: ["wedding-cover-3", "wedding-detail-4", "wedding-detail-2", "wedding-detail-1", "wedding-detail-3"],
  },
  {
    id: "4",
    slug: "charlotte-and-james",
    title: "Charlotte & James",
    subtitle: "A timeless English garden romance",
    location: "Cotswolds, England",
    coverImage: "wedding-cover-4",
    images: ["wedding-cover-4", "wedding-detail-2", "wedding-detail-3", "wedding-detail-4", "wedding-detail-1"],
  },
];
