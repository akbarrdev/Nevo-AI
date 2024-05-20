import React, { useState } from "react";
import nevo from "nevo-ai";

function App() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handlePromptChange = (event) => {
    setPrompt(event.target.value);
  };

  const handleFetchAI = async () => {
    try {
      const responseData = await nevo.ask({ apiKey: "YOUR_NEVO_API_KEY", prompt });
      setResponse(responseData);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setResponse("Sorry, there was an error fetching AI response.");
    }
  };

  return (
    <div>
      <h1>AI Response</h1>
      <div>
        <label htmlFor="prompt">Prompt:</label>
        <input
          type="text"
          id="prompt"
          value={prompt}
          onChange={handlePromptChange}
        />
        <button onClick={handleFetchAI}>Fetch AI</button>
      </div>
      <div>
        <h2>Response:</h2>
        <p>{response}</p>
      </div>
    </div>
  );
}

export default App;
