import { BOOK } from "@/data/user";

const CurrentBookCard = () => {
    return (
        <div className="flex items-center justify-between flex-1 flex-col border-edge border h-full rounded-xl overflow-hidden bg-accent dark:bg-accent/50">
            <h3 className="w-full py-1.5 px-4 text-muted-foreground text-left">
                Currently Reading
            </h3>
            <div className="p-0.5 pt-0 flex-1 h-full rounded-md flex w-full">
                <a className="flex-1 px-3 py-2 flex flex-col bg-background outline outline-muted/50 rounded-xl relative overflow-hidden group w-full"
                    href={BOOK.image} target="_blank" rel="noopener noreferrer">
                    <div className="relative h-full">
                        <div className="absolute left-10 top-6 h-full origin-bottom-left transition-transform duration-300 ease-in-out">
                            <BookCover />
                        </div>
                    </div>
                    <div className="absolute inset-0 h-full w-full bg-linear-to-t from-white/50 dark:from-black via-transparent to-transparent group-hover:opacity-0 opacity-60 dark:opacity-80 transition-all duration-200"></div>
                </a>
            </div>
        </div>
    )
}

export default CurrentBookCard


function BookCover() {
    return (
        <div className="relative aspect-video h-full w-96 translate-x-[-30%] sm:translate-x-0 group-hover:translate-x-[-20%] scale-[0.45] sm:scale-100 group-hover:scale-[0.45] translate-y-[-40%] sm:translate-y-0 group-hover:translate-y-[-40%] -rotate-6 sm:rotate-0 group-hover:rotate-6 transition-transform duration-300">
            <div className="absolute left-5 h-full w-2 bg-slate-900/20 blur-sm"></div>
            <span className="sr-only">{BOOK.title} book cover</span>
            <img
                src={BOOK.src}
                alt={`${BOOK.title} book cover`}
                className="h-auto w-full scale-90 rounded-lg overflow-hidden"
            />
        </div>
    );
}