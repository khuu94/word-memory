import { RankingItemProps } from "@/app/lib/definitions";

export default function RankingItem({
    playerName,
    score,
    index,
    rankingStyles,
}: RankingItemProps) {
    return (
        <div className={`${rankingStyles.effects[index]} z-10`} key={index}>
            <div
                className={`
                    ${rankingStyles.heights[index] || "h-11"}
                    ${rankingStyles.texts[index] || ""} 
                    ${rankingStyles.colors[index] || "bg-gossip-300"}
                    hover:brightness-125 text-gossip-800 cursor-pointer
                    flex items-center justify-between font-bold
                    w-full p-4 mx-auto
                    rounded-xl shadow-lg
                    transition-all duration-150 ease-linear`}
            >
                <span className="w-16 flex items-center justify-center">
                    {rankingStyles.icons[index] || index + 1}
                </span>
                <span className="ml-2">{playerName}</span>
                <span className="ml-auto">{score}</span>
            </div>
        </div>
    );
}
