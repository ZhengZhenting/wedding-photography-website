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
    slug: "Ma",
    title: "Ma",
    subtitle: "love story written in fresh-fallen snow",
    location: "Oranienburg, Germany",
    coverImage: "cover-1",
    images: ["cover-1", "detail-1a", "detail-1b", "detail-1c", "detail-1d", "detail-1e", "detail-1f", "detail-1g", "detail-1h", "detail-1i"],
  },
  {
    id: "2",
    slug: "jade-and-chen",
    title: "Jade & Chen",
    subtitle: "Love blossomed in the warmth of a castle",
    location: "Berlin, Germany",
    coverImage: "cover-2",
    images: ["cover-2", "detail-2a", "detail-2c", "detail-2d", "detail-2f", "detail-2g", "detail-2h", "detail-2i", "detail-2j", "detail-2k", "detail-2l"],
  },
  {
    id: "3",
    slug: "martina-and-sebastian",
    title: "Martina & Sebastian",
    subtitle: "An intimate riot of love and laughter",
    location: "Berlin, Germany",
    coverImage: "cover-3",
    images: ["cover-3", "detail-3a", "detail-3b", "detail-3c", "detail-3d", "detail-3e", "detail-3f", "detail-3g", "detail-3h"],
  },
  {
    id: "4",
    slug: "jialu-and-janis",
    title: "Jialu & Janis",
    subtitle: "Where East met West, and two hearts became one",
    location: "Berlin, Germany",
    coverImage: "cover-4",
    images: ["cover-4", "detail-4a", "detail-4b", "detail-4c", "detail-4d", "detail-4e", "detail-4f", "detail-4g", "detail-4h", "detail-4i"],
  },
    {
    id: "5",
    slug: "yunsun-and-jin",
    title: "Yunsun & Jin",
    subtitle: "A tender celebration in sophistication",
    location: "Berlin, Germany",
    coverImage: "cover-5",
    images: ["cover-5", "detail-5a", "detail-5b", "detail-5c", "detail-5d", "detail-5e", "detail-5f", "detail-5g", "detail-5h", "detail-5i", "detail-5j", "detail-5k", "detail-5l"],
  },
    {
    id: "6",
    slug: "zhuang",
    title: "Zhuang",
    subtitle: "A sun-kissed romance in summer's glow",
    location: "Schwerin, Germany",
    coverImage: "cover-6",
    images: ["cover-6", "detail-6a", "detail-6b", "detail-6c", "detail-6d", "detail-6e", "detail-6f"],
  },
    {
    id: "7",
    slug: "chunhua-and-dehao",
    title: "Chunhua & Dehao",
    subtitle: "Where tropical leaves witnessed their forever",
    location: "Shanghai, China",
    coverImage: "cover-7",
    images: ["cover-7", "detail-7a", "detail-7b", "detail-7c", "detail-7d", "detail-7e", "detail-7f", "detail-7g"],
  },
    {
    id: "8",
    slug: "zijing-and-tianshuo",
    title: "Zijing & Tianshuo",
    subtitle: "A celebration of grace and timeless love",
    location: "Berlin, Germany",
    coverImage: "cover-8",
    images: ["cover-8", "detail-8a", "detail-8b", "detail-8c", "detail-8d", "detail-8e", "detail-8f", "detail-8g", "detail-8h"],
  },
];
