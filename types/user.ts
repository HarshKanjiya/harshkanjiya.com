export type User = {
    firstName: string;
    lastName: string;
    /** Preferred public-facing name */
    displayName: string;
    /** Handle/username used in links or mentions */
    username: string;
    /** e.g. "male", "female", "non-binary" */
    gender: string;
    /** e.g. "he/him", "she/her", "they/them" */
    pronouns: string;
    bio: string;
    /** Short phrases rotated in UI (e.g., homepage flip effect) */
    flipSentences: string[];
    /** General location for display */
    address: string;
    /** E.164 format, base64 encoded (https://t.io.vn/base64-string-converter) */
    phoneNumber: string;
    /** base64 encoded (https://t.io.vn/base64-string-converter) */
    email: string;
    /** Personal/homepage URL */
    website: string;
    /** Primary/current role shown on profile */
    jobTitle: string;
    /** Work history entries */
    jobs: {
        title: string;
        company: string;
        website: string;
    }[];
    /** Rich about section; supports Markdown */
    about: string;
    /** Public URL to avatar image */
    avatar: string;
    /** Open Graph image URL for social sharing */
    ogImage: string;
    /** Audio URL for name pronunciation */
    namePronunciationUrl: string;
    /** SEO keywords list for metadata */
    keywords: string[];
    /** Time zone in IANA format (e.g., "Asia/Ho_Chi_Minh") */
    timeZone: string;
    /** Profile/site start date in YYYY-MM-DD */
    dateCreated: string;
};


export type SocialLink = {
    /** Icon image URL (absolute or path under /public) shown beside the title. */
    icon: string;
    title: string;
    /** Optional handle/username or subtitle displayed under the title. */
    description?: string;
    /** External profile URL opened when the item is clicked. */
    href: string;
};


/**
 * A technology item displayed in the Tech Stack section.
 *
 * Icon file resolution:
 * - Default: /public/tech-stack-icons/[key].svg
 * - Themed (when `theme === true`):
 *   - Dark:  /public/tech-stack-icons/[key]-dark.svg
 *   - Light: /public/tech-stack-icons/[key]-light.svg
 */
export type TechStack = {
    /** Unique identifier used to resolve icon files. */
    key: string;
    /** Display name of the technology. */
    title: string;
    /** Official website URL. */
    href: string;
    /** Category tags used for grouping/filtering. */
    categories: string[];
    /** If true, use theme-specific icons for dark/light mode. */
    theme?: boolean;
};
