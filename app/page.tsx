"use client";

import { Ranking } from "./lib/definitions";
import { useEffect, useState } from "react";
import RankingItem from "@/components/RankingItem";
import { TfiCup } from "react-icons/tfi";
import { TbCircleNumber2, TbCircleNumber3 } from "react-icons/tb";

export default function RankingPage() {
    const [rankings, setRankings] = useState<Ranking[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    // const [error, setError] = useState<string | null>(null);

    const rankingStyles = {
        heights: ["h-16", "h-14", "h-12"],
        texts: ["text-2xl", "text-xl", "text-lg"],
        icons: [
            <TfiCup size="36" />,
            <TbCircleNumber2 size="32" />,
            <TbCircleNumber3 size="28" />,
        ],
        colors: ["bg-yellow-300", "bg-slate-300", "bg-reno-sand-400"],
        effects: ["champion"],
    };

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const resp = await fetch("api/games?limit=10");
                if (!resp.ok) {
                    throw new Error("Failed to load rankings");
                }
                const rankings = await resp.json();
                setRankings(rankings);
            } catch (error) {
                // setError("Failed to load rankings");
            } finally {
                setIsLoading(false);
            }
        };

        // Init data
        fetchData();
    }, []);

    return (
        <>
            {isLoading ? (
                <div className="h-screen flex items-center justify-center text-xl text-center font-bold mb-4 text-gossip-950">
                    Loading rankings...
                </div>
            ) : (
                rankings.length != 0 && (
                    // TODO: Add Skeleton
                    <div className="m-4 p-4 h-full bg-gossip-100 rounded-xl flex flex-col justify-between gap-4">
                        {rankings.map((item: Ranking, index) => (
                            <RankingItem
                                key={index}
                                playerName={item.playerName}
                                score={item.score}
                                index={index}
                                rankingStyles={rankingStyles}
                            />
                        ))}
                    </div>
                )
            )}
        </>
    );
}
