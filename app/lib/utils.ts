import { Word } from "@prisma/client";
import { WordPair } from "./definitions";

export const shuffle = <T>(array: T[]): T[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export const calculateScore = (selectedWordPairs: WordPair[], words: Word[]) => {
  // Create a map to store correct English-French word pairs
  const correctMap = new Map<string, string>();
  words.forEach((word) => {
    correctMap.set(word.englishWord, word.frenchWord);
  });

  // Update isCorrect in each WordPair and count correct paris
  const newSelectedWordPairs = selectedWordPairs.map((selection) => {
    const isCorrect =
      correctMap.get(selection.englishWord) === selection.frenchWord;
    return { ...selection, isCorrect };
  });
  const correctCount = newSelectedWordPairs.filter(
    (pair) => pair.isCorrect
  ).length;

  // Calculate the accuracy of the selected words
  return {
    selectedScore:
      selectedWordPairs.length > 0
        ? (correctCount / selectedWordPairs.length) * 100
        : 0,
    totalScore: words.length > 0 ? (correctCount / words.length) * 100 : 0,
    newSelectedWordPairs,
  };
};
