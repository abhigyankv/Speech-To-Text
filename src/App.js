import React, { useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.interimResults = true;
  function handleclick(e) {
    e.preventDefault();
    recognition.start();
    var res = "";
    recognition.onresult = function (e) {
      res = e.results[0][0].transcript;
      setText(text + " " + res);
    };
  }
  function handleChange(event) {
    setText(event.target.value);
  }
  return (
    <div>
      <button onClick={handleclick}>listen</button>
      <textarea
        id=""
        name="setText"
        col="30"
        row="10"
        value={text}
        onChange={handleChange}
      />
      <h1>{text}</h1>
    </div>
  );
}
