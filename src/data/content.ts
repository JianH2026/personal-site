// Edit everything about yourself in this one file.
// The layout and components read from here, so you never need to touch the markup.

export const me = {
  name: "Jerry Huang",
  headline: "Computer science student building web apps, games, and clean user experiences.",
  intro:
    "I'm a student and developer focused on web apps and user experience. Here's some of my work.",
  resumeUrl: "/resume.pdf",
};

// Shown in the About section under the paragraphs.
export const languages = [
  { language: "English", native: "English", level: "Native / fluent" },
  { language: "Mandarin", native: "普通話", level: "Basic conversational" },
  { language: "Cantonese", native: "廣東話", level: "Conversational" },
];

// Shown in the About section. Each string is one paragraph.
export const about = [
  "I'm a computer science student at Hunter College, expected to graduate in May 2028. I'm looking for a software engineering internship where I can keep learning and contribute to a real team.",
  "I love video games, and that's a big part of why I enjoy building things. My Fast Food Lineup project is a case-opening style game built with Next.js and TypeScript, and it's the project I'm proudest of so far.",
  "From 2022 to 2024, I worked as a software engineer apprentice at Amazon Lab126, where I saw how device teams build and test products. Outside of coding, I practice Mandarin Chinese.",
];

export const projects = [
  {
    title: "Fast Food Lineup",
    description:
      "Built a case-opening style game in Next.js and TypeScript where players spin reels to pick a restaurant and build a fast food lineup, scored by rarity and rating.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind"],
    link: "https://fastfood-lineup.vercel.app",
  },
  {
    title: "City Drive",
    description:
      "A 3D driving game where you walk through a city, get into a car, and drive around the streets, with collisions and a chase camera.",
    tags: ["Three.js", "TypeScript", "Vite"],
    link: "https://city-drive-two.vercel.app",
  },
  {
    title: "3D Basketball",
    description:
      "A 3D half-court basketball game where you move, run, and shoot with a timing meter. Release in the green zone to swish the shot, with jointed walk, run, and shooting animations.",
    tags: ["Three.js", "TypeScript", "Vite"],
    link: "https://basketball-3d.vercel.app",
  },
];

export const experience = [
  {
    role: "Software Engineer Apprentice",
    company: "Amazon Lab126",
    period: "June 2022 – June 2024",
    points: [
      "Developed a Python tool that automates firmware updates on Fire TV and Fire Tablet devices, cutting the roughly 5-minute manual process by a few minutes per device.",
      "Personally contributed to a team effort to manually flash about 100 Fire TV sticks, keeping firmware current across test devices.",
      "Personally contributed to the team's annual Operating Plan (OP1), including a dashboard of devices, their owners, and general descriptions.",
      "Reviewed technical specifications and documentation to support team development work.",
      "Analyzed Jira tickets and the team's codebase to understand and scope assigned work.",
      "Participated in daily standups and cross-team meetings with groups including AWS to review their workflows.",
    ],
  },
];
