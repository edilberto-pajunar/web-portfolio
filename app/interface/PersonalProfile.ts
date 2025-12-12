import { Education } from "./Education";
import { Experience } from "./Experience";
import { Link } from "./Link";
import { Post } from "./Post";

export interface PersonalProfile {
  name: string;
  title: string;
  location: string;

  profilePicture: string;
  email: string;
  phone: string;
  about: string;
  education: Education[];
  experience: Experience[];
  skills: string[];
  tools: string[];
}

export const profileData: PersonalProfile = {
  name: "Edilberto Jr S Pajunar",
  title: "Full Stack Mobile Developer",
  location: "Rodriguez, Rizal",
  profilePicture: "/images/profile-picture.jpg",
  email: "pajunar0@gmail.com",
  phone: "+63 968 405 9727",
  about:
    "Passionate software engineer with expertise in modern web technologies. Dedicated to creating elegant solutions and exceptional user experiences.",
  education: [
    {
      degree: "Bachelor of Science in Computer Engineering",
      school: "Polytechnic University of the Philippines",
      location: "Sta. Mesa, Manila",
      year: "2019 - 2023",
    },
  ],
  experience: [
    {
      position: "Mid Mobile Developer",
      company: "MadSoftware Technology",
      location: "San Francisco, CA",
      period: "2025 - Present",
      description:
        "Developing and maintaining mobile applications using React Native and Flutter. Also, developing and maintaining web applications using React and Node.js.",
    },
    {
      position: "Full Stack Developer",
      company: "Diverse System Solutions Integrated",
      location: "Remote",
      period: "2024 - 2025",
      description:
        "Developing and maintaining web applications using React and Node.js.",
    },
    {
      position: "Junior Mobile Developer",
      company: "Seedbox Technologies",
      location: "New York, NY",
      period: "2023 - 2024",
      description:
        "Developing and maintaining mobile applications using React Native and Flutter.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "PostgreSQL",
    "Docker",
  ],
  tools: [
    "Android Studio",
    "iOS Simulator",
    "Xcode",
    "Flutter",
    "React Native",
    "Node.js",
    "npm",
  ],
};
