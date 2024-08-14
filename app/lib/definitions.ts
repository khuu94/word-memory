import { Game, SelectedPair, Word } from "@prisma/client";
import { ReactNode } from "react";

export type Ranking = Game

export type WordPair = Pick<SelectedPair, "englishWord" | "frenchWord" | "isCorrect">

export type WordListProps = {
  title: string;
  words: string[];
  selectedWordIndex: number | null;
  selectedWordPairs: WordPair[];
  onSelectWord: (index: number) => void;
}

export type GameManagerProps = {
  words: Word[];
  selectedWordPairs: WordPair[];
  onUpdateWordPairs: (updatedPairs: WordPair[]) => void;
  onRefreshWords: () => void;
}

export type SelectedWordPairsProps = {
  wordPairs: WordPair[];
  children?: ReactNode
  onRemovePair: (index: number) => void;
}

export type RankingItemProps = {
  playerName: string;
  score: number;
  index: number;
  rankingStyles: {
    heights: string[];
    texts: string[];
    icons: JSX.Element[];
    colors: string[];
    effects: string[];
  };
}