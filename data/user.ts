import { SocialLink, TechStack, User } from "@/types/user";

export const USER: User = {
    firstName: "Harsh",
    lastName: "Kanjiya",
    displayName: "Harsh Kanjiya",
    username: "harshkanjiya",
    gender: "male",
    pronouns: "he/him",
    bio: "Creating with code. Small details matter.",
    flipSentences: [
        "Creating with code. Small details matter.",
        "Full stack Developer",
    ],
    address: "Surat, Gujarat, India",
    phoneNumber: "KzkxIDkwNTQyIDQyMDA0", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
    email: "aGFyc2hrYW5qaXlhMTAwQGdtYWlsLmNvbQ==", // base64 encoded
    website: "https://harshkanjiya.com",
    jobTitle: "Full stack Developer",
    jobs: [
        {
            title: "Full stack Developer",
            company: "Self",
            website: "https://harshkanjiya.com",
        },
    ],
    about: "",
    avatar: "images/profile.png",
    ogImage: "",
    namePronunciationUrl: "",
    keywords: [],
    timeZone: "Asia/Ho_Chi_Minh",
    dateCreated: "2024-01-01",
}

export const SOCIAL_LINKS: SocialLink[] = [
    {
        icon: "/images/x.webp",
        title: "X",
        description: "@harsh_kaniiya",
        href: "https://x.com/harsh_kaniiya",
    },
    {
        icon: "/images/github.webp",
        title: "GitHub",
        description: "HarshKanjiya",
        href: "https://github.com/HarshKanjiya",
    },
    {
        icon: "/images/linkedin.webp",
        title: "LinkedIn",
        description: "Harsh Kanjiya",
        href: "https://www.linkedin.com/in/harsh-kanjiya",
    },
    // {
    //     icon: "https://assets.chanhdai.com/images/link-icons/dailydotdev.webp?t=1759581475",
    //     title: "daily.dev",
    //     description: "@ncdai",
    //     href: "https://app.daily.dev/ncdai",
    // }
];


export const TECH_STACK: TechStack[] = [
    {
        key: "typescript",
        title: "TypeScript",
        href: "https://www.typescriptlang.org/",
        categories: ["Language"],
    },
    {
        key: "js",
        title: "JavaScript",
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        categories: ["Language"],
    },
    {
        key: "nodejs",
        title: "Node.js",
        href: "https://nodejs.org/",
        categories: ["Runtime Environment"],
    },
    {
        key: "react",
        title: "React",
        href: "https://react.dev/",
        categories: ["Library", "UI Library"],
    },
    {
        key: "nextjs2",
        title: "Next.js",
        href: "https://nextjs.org/",
        categories: ["Framework"],
        theme: true,
    },
    {
        key: "tailwindcss",
        title: "Tailwind CSS",
        href: "https://tailwindcss.com/",
        categories: ["Framework"],
    },
    {
        key: "shadcn-ui",
        title: "shadcn/ui",
        href: "https://ui.shadcn.com/",
        categories: ["Library", "Component Library"],
        theme: true,
    },
    {
        key: "motion",
        title: "Motion",
        href: "https://motion.dev/",
        categories: ["Library", "Animation"],
    },
    // {
    //     key: "tanstack",
    //     title: "TanStack",
    //     href: "https://tanstack.com/",
    //     categories: ["Library"],
    //     theme: true,
    // },
    {
        key: "redux",
        title: "Redux",
        href: "https://redux.js.org/",
        categories: ["State Management"],
    },
    {
        key: "git",
        title: "Git",
        href: "https://git-scm.com/",
        categories: ["Version Control"],
    },
    {
        key: "docker",
        title: "Docker",
        href: "https://www.docker.com/",
        categories: ["Containerization"],
    },
    {
        key: "postgresql",
        title: "PostgreSQL",
        href: "https://www.postgresql.org/",
        categories: ["Database"],
    },
    {
        key: "mongodb",
        title: "MongoDB",
        href: "https://www.mongodb.com/",
        categories: ["Database"],
    },
    {
        key: "redis",
        title: "Redis",
        href: "https://redis.io/",
        categories: ["Database"],
    }
];
