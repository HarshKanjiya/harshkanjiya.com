import { User } from "@/types/user";

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
            company: "Project Tree Infotech",
            website: "https://projecttree.in/",
        },
    ],
    about: `
- **Design Engineer** with **3+ years of experience**,
- Skilled in **Next.js**, **React**, **Angular**, **TypeScript**, and modern front-end technologies; building high-quality, user-centric web and mobile applications.
- Passionate about exploring new technologies and learning design philosophy.
- Proven track record in modernizing legacy systems and optimizing performance.
- Intrested in **Golang**, **GenAI** and **System Design**.

    `,
    avatar: "images/profile.png",
    ogImage: "",
    namePronunciationUrl: "",
    keywords: [],
    timeZone: "Asia/Ho_Chi_Minh",
    dateCreated: "2024-01-01",
}
