import React from 'react';
import { useState, useEffect } from 'react';
import Word from './Word'

const WordShuffle = () => {
  const [words, setWords] = useState([]);

  useEffect(() => {
    requestWords();
    // eslint-disable-next-line
  }, [])

  async function requestWords() {
    const resp = await fetch(`http://localhost:3001/api/v1/words`);
    console.log('resp==>', resp)
    const words = await resp.json();
    console.log('words==>', words)
    setWords(words)
    randomWord(words)
  }

  const randomWord = () => {
    const currentWordIndex = Math.floor(Math.random() * words.length)
    return (
      <Word
        word={words[currentWordIndex].word}
        pos={words[currentWordIndex].pos}
        definition={words[currentWordIndex].definition}
        key={words[currentWordIndex].id}
      />
    )
  }

  return (
    <div className='word-display'>
      <Word/>
    </div>

  )
}

export default WordShuffle;





