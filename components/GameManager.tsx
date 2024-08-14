"use client";

import { GameManagerProps } from "@/app/lib/definitions";
import { calculateScore } from "@/app/lib/utils";
import { useState } from "react";
import CreateGameForm from "./CreateGameForm";

export default function GameManager({
    words,
    selectedWordPairs,
    onUpdateWordPairs,
    onRefreshWords,
}: GameManagerProps) {
    const [score, setScore] = useState<{
        selected: number | null;
        total: number | null;
    }>({
        selected: null,
        total: null,
    });
    const [isScoring, setIsScoring] = useState<boolean>(false);
    const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

    // Calculate the accuracy of the selected words
    const handleAction = async () => {
        if (isScoring) {
            const { selectedScore, totalScore, newSelectedWordPairs } =
                calculateScore(selectedWordPairs, words);

            setScore({
                selected: selectedScore,
                total: totalScore,
            });

            // Update new selectedWordPairs from parent
            onUpdateWordPairs(newSelectedWordPairs);
        } else {
            setIsRefreshing(true); // Set loading to true while refreshing
            await onRefreshWords();
            setIsRefreshing(false); // Set loading to false after refresh
        }
        setIsScoring(!isScoring);
    };

    return (
        <>
            <button
                onClick={handleAction}
                className={`text-white w-60 rounded-xl p-2 -mt-4 mx-12
                    bg-reno-sand-900 hover:bg-reno-sand-950 
                    disabled:bg-reno-sand-400 disabled:text-reno-sand-100 
                    transition-all duration-150 ease-linear`}
                disabled={isRefreshing && !isScoring} // Disable button during loading if not scoring
            >
                {isScoring ? "GRADE" : "GO!"}
            </button>
            {!isScoring &&
                (score.selected !== null || score.total !== null) && (
                    <div className="flex flex-col items-center py-10">
                        {score.selected !== null && (
                            <h2 className="text-xl font-bold">
                                Your Selection Score:{" "}
                                {score.selected?.toFixed(0)}%
                            </h2>
                        )}
                        {score.total !== null && (
                            <h2 className="text-xl font-bold">
                                Total Score: {score.total?.toFixed(0)}%
                            </h2>
                        )}
                        <CreateGameForm score={score.total} />
                    </div>
                )}
        </>
    );
}
