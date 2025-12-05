import { User } from "@/types/user";

export const USER: User = {
    firstName: "Harsh",
    lastName: "Kanjiya",
    displayName: "Harsh Kanjiya",
    username: "harshkanjiya",
    gender: "male",
    pronouns: "he/him",
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
            company: "Project Tree",
            website: "https://projecttree.in/",
        },
    ],
    about: `
- **Full Stack Developer** with **3+ years of experience**,
- Skilled in **Next.js**, **React**, **Angular**, **TypeScript**, and modern technologies; building high-quality, user-centric web applications.
- Passionate about exploring new technologies and learning design philosophy.
- Proven track record in modernizing legacy systems and optimizing performance.
- Learning in **Golang**, **GenAI** and **System Design**.
    `,
    avatar: "https://assets.harshkanjiya.com/general/profile.png",

    // METADATA
    bio: "Minimal, and modern developer portfolio built with Next.js, MDX, and ShadCN. Designed for project documentation, technical blogs, and personal notes.",
    ogImage: "https://assets.harshkanjiya.com/general/tweetr-card.png",
    namePronunciationUrl: "",
    keywords: ["Harsh Kanjiya", "Harsh", "Kanjiya", "harshkanjiya", "Full stack Developer", "React Developer", "Angular Developer", "Next.js Developer", "TypeScript Developer", "Web Developer", "Frontend Developer", "Backend Developer", "JavaScript Developer", "Portfolio", "Personal Website", "Minimalist Portfolio", "Developer Portfolio", "Modern portfolio", "Clean portfolio"],
    timeZone: "Asia/Kolkata",
    dateCreated: "2025-4-12",
}
