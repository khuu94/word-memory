"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Word } from "@prisma/client";
import { shuffle } from "../lib/utils";
import { WordPair } from "../lib/definitions";
import WordList from "@/components/WordList";
import SelectedWordPairs from "@/components/SelectedWordPairs";
import GameManager from "@/components/GameManager";

export default function MatchPage() {
    const searchParams = useSearchParams();
    const limit = searchParams.get("limit");
    const wordLimit = limit ? parseInt(limit as string) : 10; // Default to 10 if not provided
    const initWords = Array.from({ length: wordLimit }, () => "");

    const [words, setWords] = useState<Word[]>([]);
    const [englishWords, setEnglishWords] = useState<string[]>(initWords);
    const [frenchWords, setFrenchWords] = useState<string[]>(initWords);
    const [selectedEnglishIndex, setSelectedEnglishIndex] = useState<
        number | null
    >(null);
    const [selectedFrenchIndex, setSelectedFrenchIndex] = useState<
        number | null
    >(null);
    const [selectedWordPairs, setSelectedWordPairs] = useState<WordPair[]>([]);

    const fetchWords = async () => {
        const resp = await fetch("api/words");
        if (!resp.ok) {
            throw new Error("Failed to load words");
        }
        const fetchedWords: Word[] = await resp.json();
        const limitedWords = fetchedWords.slice(0, wordLimit);

        // Random words using shuffle algorithm
        const shuffledEnglishWords = shuffle(
            limitedWords.map((word) => word.englishWord)
        );
        const shuffledFrenchWords = shuffle(
            limitedWords.map((word) => word.frenchWord)
        );

        setWords(limitedWords);
        setEnglishWords(shuffledEnglishWords);
        setFrenchWords(shuffledFrenchWords);
    };

    const handleSelectEnglish = (index: number) => {
        setSelectedEnglishIndex(index);
        if (selectedFrenchIndex != null) {
            addWordPair(index, selectedFrenchIndex);
        }
    };

    const handleSelectFrench = (index: number) => {
        setSelectedFrenchIndex(index);
        if (selectedEnglishIndex != null) {
            addWordPair(selectedEnglishIndex, index);
        }
    };

    const handleRemovePair = (index: number) => {
        setSelectedWordPairs((prevPairs) =>
            prevPairs.filter((_, i) => i !== index)
        );
    };

    const addWordPair = (englishWordIndex: number, frenchWordIndex: number) => {
        setSelectedWordPairs((prevPairs) => [
            ...prevPairs,
            {
                englishWord: englishWords[englishWordIndex],
                frenchWord: frenchWords[frenchWordIndex],
                isCorrect: false,
            },
        ]);
        setSelectedEnglishIndex(null);
        setSelectedFrenchIndex(null);
    };

    const refreshWords = async () => {
        await fetchWords();
    };

    const onUpdateState = (updatedPairs: WordPair[]) => {
        setSelectedWordPairs(updatedPairs);

        // Reset all states
        setSelectedWordPairs([]);
        setEnglishWords(initWords);
        setFrenchWords(initWords);
        setSelectedEnglishIndex(null);
        setSelectedFrenchIndex(null);
    };

    return (
        <>
            <div className="flex justify-between gap-10 p-10">
                <div
                    className="flex justify-around gap-10 h-fit"
                    style={{ width: "clamp(50rem, 60%, 90rem)" }}
                >
                    <WordList
                        title="English Word"
                        words={englishWords}
                        selectedWordIndex={selectedEnglishIndex}
                        onSelectWord={handleSelectEnglish}
                        selectedWordPairs={selectedWordPairs}
                    />
                    <WordList
                        title="French Word"
                        words={frenchWords}
                        selectedWordIndex={selectedFrenchIndex}
                        onSelectWord={handleSelectFrench}
                        selectedWordPairs={selectedWordPairs}
                    />
                </div>
                <SelectedWordPairs
                    wordPairs={selectedWordPairs}
                    onRemovePair={handleRemovePair}
                >
                    <GameManager
                        words={words}
                        selectedWordPairs={selectedWordPairs}
                        onUpdateWordPairs={onUpdateState}
                        onRefreshWords={refreshWords}
                    />
                </SelectedWordPairs>
            </div>
        </>
    );
}
