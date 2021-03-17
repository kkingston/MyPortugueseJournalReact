import React from 'react'
import EntryForm from './entryForm'
import WordShuffle from './wordShuffle'

const Home = () => {
  return (
    <div className="container">     
      <WordShuffle/>
      <EntryForm />
    </div>
  )
}

export default Home;