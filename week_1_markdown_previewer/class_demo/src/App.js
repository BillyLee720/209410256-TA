import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

function App() {
  const [markdown, setMarkdown] = useState('由此處開始填寫 Markdown')
  return (
    <main>
      <section className="markdown">
        <textarea className="input" value={markdown} onChange={(e) => setMarkdown(e.target.value)}></textarea>
        <article className="result">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>
    </main>
  )
  
}

export default App
