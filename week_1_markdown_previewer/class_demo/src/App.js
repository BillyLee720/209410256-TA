import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

function App() {
  
  return (
    <main>
      <h1 className="title">Markdown Preview</h1>
      <section className="markdown">
        <textarea className="input"></textarea>
        <article></article>
      </section>
    </main>
  )
  
}

export default App
