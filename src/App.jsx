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
        <Counter />

        {/* Input Field */}
        <input
          type="text"
          placeholder="Write something here..."
          className="mt-10 p-3 border border-gray-300 rounded w-full max-w-md"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />

        {/* Live Text Display */}
        <div className="mt-6 w-full max-w-md bg-white p-4 rounded shadow">
          <h3 className="text-lg font-medium text-gray-700 mb-2">Live Text:</h3>
          <p className="text-gray-900">
            {inputText || "Start typing above..."}
          </p>
        </div>
      </div>
      
    </>
  )
}

export default App
