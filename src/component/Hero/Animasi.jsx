import React from 'react'
import ReactTypingEffect from 'react-typing-effect';

const Animasi = () => {
  return (
    <ReactTypingEffect
      text={['Fullstack Developer', 'Web Developer', 'Programer']}
      speed={100}
      eraseSpeed={50}
      eraseDelay={2000}
      typingDelay={500}
      cursorClassName="TypingCursor"
      className="TypingText"
    />
  )
}

export default Animasi