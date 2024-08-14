import { SelectedWordPairsProps } from "@/app/lib/definitions";
import { PiEqualsFill } from "react-icons/pi";

export default function SelectedWordPairs({
    wordPairs,
    children,
    onRemovePair,
}: SelectedWordPairsProps) {
    return (
        <div className="w-full max-w-xl bg-reno-sand-100 p-8 rounded-xl">
            <h2 className="text-xl text-center font-bold mb-2 text-reno-sand-950">
                {children}
            </h2>
            <ul className="flex flex-col justify-between gap-4">
                {wordPairs.map((pair, index) => (
                    <li
                        key={index}
                        className="bg-reno-sand-200 text-reno-sand-800 hover:bg-reno-sand-800 hover:text-reno-sand-50
                            flex items-center justify-between font-bold
                            h-11 w-full p-4 mx-auto
                            rounded-xl
                            transition-all duration-150 ease-linear
                            cursor-pointer shadow-lg"
                        onClick={() => onRemovePair(index)}
                    >
                        <span className="flex-1 text-left">
                            {pair.englishWord}
                        </span>
                        <PiEqualsFill size="28" className="mx-4" />
                        <span className="flex-1 text-right">
                            {pair.frenchWord}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
