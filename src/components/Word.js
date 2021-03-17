const Word = (props) => {
  return (
    <div className='container'>
      <h2 className='center'>Word: {props.word}</h2>
      <h3 className='center'>Part of Speech - {props.pos}</h3>
      <p>Definition: {props.definition}</p>
    </div>
  )
}

export default Word 