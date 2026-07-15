import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa6";
import { SiTailwindcss, SiJavascript, SiVite } from "react-icons/si";

export const skills = [
  { id: 1, name: "JavaScript", icon: SiJavascript, category: "Language" },
  { id: 2, name: "React", icon: FaReact, category: "Framework" },
  { id: 3, name: "HTML5", icon: FaHtml5, category: "Markup" },
  { id: 4, name: "CSS3", icon: FaCss3Alt, category: "Styling" },
  { id: 5, name: "Tailwind CSS", icon: SiTailwindcss, category: "Styling" },
  { id: 6, name: "Vite", icon: SiVite, category: "Tooling" },
  { id: 7, name: "Git & GitHub", icon: FaGitAlt, category: "Version Control" },
  { id: 8, name: "Figma", icon: FaFigma, category: "Design" },
];