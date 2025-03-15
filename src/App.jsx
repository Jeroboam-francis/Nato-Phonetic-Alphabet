import "./App.css";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [output, setOutput] = useState([]);

  const Alphabets = {
    A: "Alfa",
    B: "Bravo",
    C: "Charlie",
    D: "Delta",
    E: "Echo",
    F: "Foxtrot",
    G: "Golf",
    H: "Hotel",
    I: "India",
    J: "Juliet",
    K: "Kilo",
    L: "Lima",
    M: "Mike",
    N: "November",
    O: "Oscar",
    P: "Papa",
    Q: "Quebec",
    R: "Romeo",
    S: "Sierra",
    T: "Tango",
    U: "Uniform",
    V: "Victor",
    W: "Whiskey",
    X: "X-ray",
    Y: "Yankee",
    Z: "Zulu",

    0: "Zero",
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
    "!": "Exclamation Mark",
    '"': "Double Quote",
    "#": "Hash",
    $: "Dollar Sign",
    "%": "Percent Sign",
    "&": "Ampersand",
    "'": "Apostrophe",
    "(": "Left Parenthesis",
    ")": "Right Parenthesis",
    "*": "Asterisk",
    "+": "Plus Sign",
    ",": "Comma",
    "-": "Hyphen",
    ".": "Period",
    "/": "Slash",
    ":": "Colon",
    ";": "Semicolon",
    "<": "Less Than",
    "=": "Equals Sign",
    ">": "Greater Than",
    "?": "Question Mark",
    "@": "At Symbol",
    "[": "Left Square Bracket",
    "\\": "Backslash",
    "]": "Right Square Bracket",
    "^": "Caret",
    _: "Underscore",
    "`": "Grave Accent",
    "{": "Left Curly Brace",
    "|": "Vertical Bar",
    "}": "Right Curly Brace",
    "~": "Tilde",
  };

  const convertTextToNato = (input) => {
    const result = input
      .toUpperCase()
      .split("")
      .map((char) => Alphabets[char] || char);
    setOutput(result);
  };

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    convertTextToNato(newText);
  };

  return (
    <div className="container">
      <h1>NATO PHONETIC ALPHABET</h1>
      <h2>Convert Text to NATO Phonetic Alphabet</h2>
      <textarea
        placeholder="Type Your Text Here..."
        name="nato-input"
        id="nato-input"
        value={text}
        onChange={handleTextChange}
      ></textarea>
      <div className="output">
        {output.map((word, index) => (
          <span key={index}>{word}</span>
        ))}
      </div>
    </div>
  );
}

export default App;
