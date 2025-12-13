export interface Experience {
  position: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  type: "full-time" | "part-time" | "freelance" | "internship";
}
