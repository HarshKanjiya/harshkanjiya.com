import { Book, FavoriteSong, User } from "@/types/user";

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
- Skilled in **Next.js**, **React**, **Angular**, **TypeScript**, & modern technologies; building high-quality, user-centric web applications.
- Passionate about exploring new technologies & learning design philosophy.
- Proven track record in modernizing legacy systems & optimizing performance.
- Learning in **Golang**, **GenAI** & **System Design**.
    `,
    avatar: "https://assets.harshkanjiya.com/general/profile.png",

    // METADATA
    bio: "Minimal & modern developer portfolio built with Next.js, MDX, & ShadCN. Designed for project documentation, technical blogs, & personal notes.",
    ogImage: "https://assets.harshkanjiya.com/general/tweetr-card.png",
    namePronunciationUrl: "",
    keywords: ["Harsh Kanjiya", "Harsh", "Kanjiya", "harshkanjiya", "Full stack Developer", "React Developer", "Angular Developer", "Next.js Developer", "TypeScript Developer", "Web Developer", "Frontend Developer", "Backend Developer", "JavaScript Developer", "Portfolio", "Personal Website", "Minimalist Portfolio", "Developer Portfolio", "Modern portfolio", "Clean portfolio"],
    timeZone: "Asia/Kolkata",
    dateCreated: "2025-4-12",
    resume: "https://assets.harshkanjiya.com/resume/Harsh%20Kanjiya%20Resume.pdf"
}

export const FAVORITE_SONG: FavoriteSong = {
    artist: "Kishore&nbsp;Kumar",
    albumName: "Kishore&nbsp;Kumar&nbsp;Masti&nbsp;Ki&nbsp;Chakri",
    albumId: "6lxPWc34lT7pYMgqy0Sd3a",
    artistId: "0GF4shudTAFv8ak9eWdd4Y",
    title: "Chala&nbsp;Jata&nbsp;Hoon",
    albumImageUrl:
        "https://i.scdn.co/image/ab67616d00001e02e1b092b5f873a2afd324a98e",
    songUrl: "https://open.spotify.com/track/5qQIs3YxG66SUHK3KHhSIr",
};

export const BOOK: Book = {
    title: "Steal Like an Artist",
    src: "https://assets.harshkanjiya.com/general/618iLg6I3zL._SY342_.jpg",
    image: "https://austinkleon.com/steal/"
}