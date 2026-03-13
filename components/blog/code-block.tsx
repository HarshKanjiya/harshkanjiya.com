import { codeToHtml } from "shiki";
import { CopyButton } from "@/components/copy-button";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
    code: string;
    lang?: string;
    bgGradient?: string;
    className?: string;
}

const LANG_LABELS: Record<string, string> = {
    ts: "TypeScript",
    tsx: "TypeScript",
    js: "JavaScript",
    jsx: "JavaScript",
    html: "HTML",
    css: "CSS",
    scss: "SCSS",
    json: "JSON",
    bash: "Bash",
    sh: "Shell",
    python: "Python",
    rust: "Rust",
    go: "Go",
};

const SHIKI_LANGS: Record<string, string> = {
    ts: "typescript",
    tsx: "tsx",
    js: "javascript",
    jsx: "jsx",
    html: "html",
    css: "css",
    scss: "scss",
    json: "json",
    bash: "bash",
    sh: "shell",
    python: "python",
    rust: "rust",
    go: "go",
};

export default async function CodeBlock({
    code,
    lang = "ts",
    bgGradient,
    className,
}: CodeBlockProps) {
    const label = LANG_LABELS[lang] ?? lang.toUpperCase();
    const shikiLang = SHIKI_LANGS[lang] ?? lang;
    const rawCode = code.split("{NL}").join("\n");

    let highlightedHtml = "";
    try {
        highlightedHtml = await codeToHtml(rawCode, {
            lang: shikiLang,
            themes: {
                dark: "github-dark",
                light: "github-light",
            },
        });
    } catch {
        highlightedHtml = `<pre><code>${rawCode}</code></pre>`;
    }

    return (
        <div className={cn("not-prose my-6 overflow-hidden rounded-xl border border-border shadow-sm", className)}>
            {bgGradient && (
                <div className={cn("h-1 w-full", bgGradient)} />
            )}

            <div className="flex items-center justify-between border-b border-border bg-muted/50 px-4 py-2">
                <span className="font-mono text-xs text-muted-foreground">{label}</span>
                <CopyButton value={rawCode} />
            </div>

            <div
                className={cn(
                    "overflow-x-auto text-sm",
                    "[&>pre]:overflow-x-auto [&>pre]:p-4 [&>pre]:leading-relaxed",
                    "[&>pre]:bg-transparent!",
                )}
                dangerouslySetInnerHTML={{ __html: highlightedHtml }}
            />
        </div>
    );
}