import { Education } from "./Education";
import { Experience } from "./Experience";

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
      position: "Mobile Developer",
      company: "MadSoftware Technology",
      location: "Remote",
      period: "2025 - Present",
      description:
        "Developing and maintaining mobile applications using React Native and Flutter. Also, developing and maintaining web applications using React and Node.js.",
      achievements: [
        "Converted and deployed the GoGym mobile app to Flutter with integrated Ruby REST APIs and PostgreSQL.",
        "Utilized BLoC, Clean Architecture, go_router, and Dio to build a scalable and maintainable codebase.",
        "Added Shorebird codepush/CI/CD, Firestore, Crashlytics, and unit tests to improve reliability and monitoring.",
      ],
      type: "full-time",
    },
    {
      position: "Full Stack Developer",
      company: "Avigate Inc",
      location: "Remote",
      period: "2023 - 2025",
      description:
        " led the end-to-end development and technical enhancement of AviGate’s B2B booking application.",
      achievements: [
        "Led the development and enhancement of AviGate’s B2B booking application, architecting a scalable Flutter and FlutterFlow solution.",
        "Built automated backend workflows using Google Cloud Functions and integrated Xendit payments via FAST API with SMTP-based email support.",
        "Managed deployments across Firebase App Distribution, Play Store, and App Store, leveraging Firestore and Crashlytics for reliability and monitoring.",
      ],
      type: "part-time",
    },
    {
      position: "Full Stack Developer",
      company: "Diverse System Solutions Integrated",
      location: "Remote",
      period: "2024 - 2025",
      description:
        "Developing and maintaining web applications using React and Node.js.",
      achievements: [
        "Led the end-to-end development of the Emergency Response mobile app using Flutter, Laravel APIs, BLoC, and Clean Architecture, including full migration from Framework7 to Flutter.",
        "Collaborated on UI/UX design, implemented Firebase notifications, and integrated Mapbox with Polyline tracking for real-time location features.",
        "Managed backend data flow and database design, created UML diagrams and flowcharts, and integrated PHP-based APIs while overseeing the project as team lead.",
      ],
      type: "full-time",
    },
    {
      position: "Mobile Developer",
      company: "Subscrbe Inc",
      location: "New York",
      period: "2023 - 2025",
      description:
        "Team Lead for Subscrbe, a travel-activity app designed for groups of travelers",
      achievements: [
        "Led part-time development efforts for the Subscrbe travel-activity app, using Flutter, BLoC, Clean Architecture, and feature-based structuring with CI/CD pipelines via Codemagic and GitHub Actions.",
        "Resolved major bugs in the existing codebase and built core features, including real-time live tracking using device location APIs.",
        "Integrated Firebase services (Auth, Firestore, Deep Links, Notifications) and implemented Mapbox for advanced location and mapping features.",
      ],
      type: "part-time",
    },
    {
      position: "Junior Mobile Developer",
      company: "Seedbox Technologies",
      location: "Makati",
      period: "2023 - 2024",
      description: "Develop a mobile application for a Brokerage platform",
      achievements: [
        "Developed the Brokerage mobile app using Flutter, Provider, and MVC, including unit and widget testing for robust functionality.",
        "Integrated a WebView for seamless interaction with a third-party trading platform and managed multiple environments (dev, staging, prod).",
        "Successfully deployed the application to both App Store and Play Store, ensuring production readiness and stability.",
      ],
      type: "full-time",
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
