
const CurrentBookCard = () => {
    return (
        <div className="flex items-center justify-between flex-1 flex-col border-edge border h-full rounded-xl overflow-hidden bg-accent2">
            <h3 className="font-medium w-full py-1.5 px-2 text-lg opacity-50 text-center">
                Currently Reading
            </h3>
            <div className="p-1.5 pt-0 flex-1 h-full rounded-md flex w-full">
                <div className="flex-1 px-3 py-2 flex flex-col border border-edge bg-accent dark:bg-accent/50 rounded-lg relative overflow-hidden group w-full">

                </div>
            </div>
        </div>
    )
}

export default CurrentBookCard