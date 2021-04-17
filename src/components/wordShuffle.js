import React from 'react';
//import { useState, useEffect } from 'react';
import Word from './Word'

class WordShuffle extends React.Component {
  constructor() {
    super()
    this.state = {
      word: undefined,
      pos: undefined,
      definition: undefined,
      error: false
    }
  };

  calIndex(words) {
    let currentWordIndex = Math.floor(Math.random() * words.length)
    return currentWordIndex
  }

  requestWords = async () => {
    const resp = await fetch(`http://localhost:3001/api/v1/words`);
      console.log('resp==>', resp)
    const words = await resp.json();
      console.log('words==>', words)

    this.setState({
      word: words.word,
      pos: words.pos,
      definition: words.definition
    })

    return words
  }

  render() {
    return (
      <div className="word-display">
        <Word 
          word={this.state.word}
          pos={this.state.pos}
          definition={this.state.definition}
        />
      </div>
    );
  };
};


export default WordShuffle;

// const WordShuffle = () => {
//   const [words, setWords] = useState([]);

//   useEffect(() => {
//     requestWords();
//     // eslint-disable-next-line
//   }, [])

//   async function requestWords() {
//     const resp = await fetch(`http://localhost:3001/api/v1/words`);
//     console.log('resp==>', resp)
//     const words = await resp.json();
//     console.log('words==>', words)
//     setWords(words)
//     randomWord(words)
//   }

//   const randomWord = () => {
//     const currentWordIndex = Math.floor(Math.random() * words.length)
//     return (
//       <Word
//         word={words[currentWordIndex].word}
//         pos={words[currentWordIndex].pos}
//         definition={words[currentWordIndex].definition}
//         key={words[currentWordIndex].id}
//       />
//     )
//   }

//   return (
//     <div className='word-display'>
//       <Word/>
//     </div>

//   )
// }





