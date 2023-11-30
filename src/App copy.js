import React from 'react';
import analyzeImage from './azure-image-analysis.js';
import {useRef} from 'react';


// create a function that creates a title, a textbox, and two buttons
function App() {
  return (
    <div>
      <h1>Insert URL or type prompt</h1>
      <input ref={inputRef} type="text" placeholder="Enter URL to analyze or textual prompt to generate an image"></input>
      <button onClick={analyzeButtonClicked}>Analyze </button>
      <button>Generate</button>
    </div>
  );

}

// create a function  when the Analyze button is clicked
// create a function  when the Analyze button is clicked, the analyzeImage function is called
function analyzeButtonClicked() {
  // get value from input box and store in a variable named imageURL 
  
  

  // call the analyzeImage function
  analyzeImage(inputRef.current.value);
}


// Insert URL or type prompt
export default App;
