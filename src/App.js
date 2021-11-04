import { useState } from "react";
import prompts from "./prompts";

const getRandomCheckInPrompt = (prompts) => {
  return prompts[Math.floor(Math.random() * prompts.length)];
}

const App = () => {
  const [prompt, setPrompt] = useState(getRandomCheckInPrompt(prompts))
  return (
    <>
      <main>
        <div className="wrapper">
          <p className="prompt">{prompt}</p>
          <button onClick={() => setPrompt(getRandomCheckInPrompt(prompts))}>Refresh</button>
        </div>
      </main>
      <footer><p>Made with ❤️ by jalo3170 for OLES2107 Assignment 2. Thank you for a great semester! <a href="https://github.com/jalo3170/haveyoucheckedin">View source on Github</a></p></footer>
    </>
  );
}

export default App;
