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
        icon: "https://assets.chanhdai.com/images/link-icons/x.webp?t=1759581475",
        title: "X (formerly Twitter)",
        description: "@iamncdai",
        href: "https://x.com/iamncdai",
    },
    {
        icon: "https://assets.chanhdai.com/images/link-icons/github.webp?t=1759581475",
        title: "GitHub",
        description: "ncdai",
        href: "https://github.com/ncdai",
    },
    {
        icon: "https://assets.chanhdai.com/images/link-icons/linkedin.webp?t=1759581475",
        title: "LinkedIn",
        description: "ncdai",
        href: "https://linkedin.com/in/ncdai",
    },
    {
        icon: "https://assets.chanhdai.com/images/link-icons/dailydotdev.webp?t=1759581475",
        title: "daily.dev",
        description: "@ncdai",
        href: "https://app.daily.dev/ncdai",
    },
    {
        icon: "https://assets.chanhdai.com/images/link-icons/zalo.webp?t=1759581475",
        title: "Zalo",
        description: "Quaric",
        href: "https://zalo.me/2353934240045322830",
    },
    {
        icon: "https://assets.chanhdai.com/images/link-icons/youtube.webp?t=1759581475",
        title: "YouTube",
        description: "@ncdai",
        href: "https://www.youtube.com/@ncdai",
    },
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
        key: "python",
        title: "Python",
        href: "https://www.python.org/",
        categories: ["Language"],
    },
    {
        key: "php",
        title: "PHP",
        href: "https://www.php.net/",
        categories: ["Language"],
    },
    {
        key: "java",
        title: "Java",
        href: "https://www.java.com/",
        categories: ["Language"],
    },
    {
        key: "nodejs",
        title: "Node.js",
        href: "https://nodejs.org/",
        categories: ["Runtime Environment"],
    },
    {
        key: "bun",
        title: "Bun",
        href: "https://bun.sh/",
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
        key: "radixui",
        title: "Radix UI",
        href: "https://www.radix-ui.com/",
        categories: ["Library", "Component Library"],
        theme: true,
    },
    {
        key: "motion",
        title: "Motion",
        href: "https://motion.dev/",
        categories: ["Library", "Animation"],
    },
    {
        key: "tanstack",
        title: "TanStack",
        href: "https://tanstack.com/",
        categories: ["Library"],
        theme: true,
    },
    {
        key: "mobx-state-tree",
        title: "MobX-State-Tree",
        href: "https://mobx-state-tree.js.org/",
        categories: ["State Management"],
    },
    {
        key: "redux",
        title: "Redux",
        href: "https://redux.js.org/",
        categories: ["State Management"],
    },
    {
        key: "antd",
        title: "Ant Design",
        href: "https://ant.design/",
        categories: ["Library", "UI Library"],
    },
    {
        key: "react-router",
        title: "React Router",
        href: "https://reactrouter.com/",
        categories: ["Library", "Navigation"],
        theme: true,
    },
    {
        key: "react-navigation",
        title: "React Navigation",
        href: "https://reactnavigation.org/",
        categories: ["Library", "Navigation"],
    },
    {
        key: "loopback",
        title: "LoopBack",
        href: "https://loopback.io/",
        categories: ["Framework"],
    },
    {
        key: "laravel",
        title: "Laravel",
        href: "https://laravel.com/",
        categories: ["Framework"],
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
        key: "mysql",
        title: "MySQL",
        href: "https://www.mysql.com/",
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
    },
    {
        key: "figma",
        title: "Figma",
        href: "https://www.figma.com/",
        categories: ["Tools", "Design"],
    },
    {
        key: "ps",
        title: "Adobe Photoshop",
        href: "https://www.adobe.com/vn_en/products/photoshop.html",
        categories: ["Tools", "Design"],
    },
    {
        key: "chatgpt",
        title: "ChatGPT",
        href: "https://chatgpt.com/",
        categories: ["Tools", "AI"],
        theme: true,
    },
];
