import { WordListProps } from "@/app/lib/definitions";

export default function WordList({
    title,
    words,
    selectedWordIndex,
    selectedWordPairs,
    onSelectWord,
}: WordListProps) {
    return (
        <div className="w-full max-w-xs bg-gossip-100 p-8 rounded-xl">
            <h2 className="text-xl text-center font-bold mb-4 text-gossip-950">
                {title}
            </h2>
            <div className="flex flex-col justify-between gap-4 ">
                {words.map((word, index) => {
                    const isSelected = selectedWordIndex === index;
                    const isDisabled =
                        word === "" ||
                        selectedWordPairs.some(
                            (pair) =>
                                pair.englishWord === word ||
                                pair.frenchWord === word
                        );

                    return (
                        <div
                            key={word !== "" ? word : index}
                            onClick={() => !isDisabled && onSelectWord(index)}
                            className={`${
                                isDisabled
                                    ? "bg-hippie-green-400 text-hippie-green-100" // Disabled visual after selected word pair
                                    : isSelected
                                    ? "text-gossip-50 bg-gossip-800" // Selected visual
                                    : "bg-gossip-200 text-gossip-800 hover:bg-gossip-800 hover:text-gossip-50" // Default visual
                            }
                            flex items-center justify-center font-bold
                            h-11 w-60 p-4 mx-auto
                            rounded-xl shadow-lg cursor-pointer
                            transition-all duration-150 ease-linear
                        `}
                        >
                            {word}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
