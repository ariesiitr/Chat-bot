import { useState } from "react";
import "./App.css";

function App() {
  const [question, setQuestion] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="home">
      <h1>ChatBot</h1>
      <div className="chatContainer">
        <div className="chat">chats..</div>
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder="Enter"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default App;
