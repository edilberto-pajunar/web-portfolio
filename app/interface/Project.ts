export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  liveLink: string;
  githubLink?: string;
  platform: string;
  techStack: string[];
  category: string;
  status: "live" | "in-progress" | "completed";
  images: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    title: "GoGym",
    description: "A modern gym subscription platform.",
    longDescription:
      "It allows users to subscribe to a gym and access its facilities and classes.",
    image: "/images/gogym-1.webp",
    liveLink: "https://go-gym.com",
    // githubLink: "https://github.com/example/go-gym",
    platform: "Mobile",
    techStack: ["Flutter", "Dart", "Ruby on Rails", "PostgreSQL", "Firebase"],
    category: "Mobile Application Developer",
    status: "live",
    images: ["/images/gogym-1.webp", "/images/gogym-2.webp"],
  },
  {
    id: "2",
    title: "Avigate",
    description: "A B2B booking application for sales management.",
    longDescription: "It allows users to manage their sales and bookings.",
    image: "/images/avigate-1.webp",
    liveLink: "https://avigate.com",
    // githubLink: "https://github.com/example/avigate",
    platform: "Web & Mobile",
    techStack: ["Flutter", "Dart", "Firebase", "Java"],
    category: "Full Stack Developer",
    status: "live",
    images: ["/images/avigate-1.webp", "/images/avigate-2.webp"],
  },
  {
    id: "3",
    title: "Subscrbe",
    description: "A travel-activity app for groups of travelers",
    longDescription:
      "It allows users to create and manage their travel activities and events.",
    image: "/images/subscrbe-1.webp",
    liveLink: "https://ai-content-demo.com",
    platform: "Mobile",
    techStack: ["Flutter", "Dart", "Firebase", "GCP"],
    category: "Mobile Application Developer",
    status: "live",
    images: ["/images/subscrbe-1.webp", "/images/subscrbe-2.webp"],
  },
  {
    id: "4",
    title: "SBX: Stocks by Seedbox",
    description: "A brokerage platform for trading stocks and cryptocurrencies",
    longDescription: "It allows users to trade stocks and cryptocurrencies.",
    image: "/images/seedbox-1.webp",
    liveLink: "https://sbx.com",
    // githubLink: "https://github.com/example/sbx",
    platform: "Mobile",
    techStack: ["Flutter", "Dart", "Firebase", "Springboot"],
    category: "Mobile Application Developer",
    status: "live",
    images: ["/images/seedbox-1.webp", "/images/seedbox-2.webp"],
  },
];
