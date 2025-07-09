import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';

function App() {
 
// State for the input text
  const [inputText, setInputText] = useState("");
  return (
    <>
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">
      Counter & Text Display App
      </h1>

      {/* Counter component */}
      <Counter/>

      {/* Input Field */}
      <input
        type="text"
        placeholder="Write something here..."
        className="mt-10 p-3 border border-gray-300 rounded w-full max-w-md"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      
    </div>
      
    </>
  )
}

export default App
