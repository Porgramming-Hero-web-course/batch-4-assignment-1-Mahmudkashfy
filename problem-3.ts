{
  function countWordOccurrences(sentence: string, word: string): number {
    const lowerSentence = sentence.toLowerCase();
    const lowerWord = word.toLowerCase();

    const matches = lowerSentence.match(new RegExp(`\\b${lowerWord}\\b`, "g"));
    return matches ? matches.length : 0;
  }

  console.log(countWordOccurrences("I love typescript", "typescript"));

  //
}
