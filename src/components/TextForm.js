import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter Text here");
  // text = "new text"; // Wrong way to change the state
  // setText ("new text"); // correct way to change the state

  const handleUpClick = () => {
    // console.log("Uppercase was clicked : " + text)

    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to UpperCase", "success")
  };
  const handleDwnClick = () => {
    // console.log("Uppercase was clicked : " + text)

    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to LowerCase", "success")
  };
  const handleClear = () => {
    // console.log("Uppercase was clicked : " + text)

    let newText = "";
    setText(newText);
    props.showAlert("Cleared", "success")
  };
  const handleOnChange = (event) => {
    // console.log("On Change")
    setText(event.target.value);
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    // text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value)
    props.showAlert("Copied to clipboard", "success")
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces removed", "success")
  }

  return (
    <>
      <div className="container" style={{color : props.mode=== 'dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            onChange={handleOnChange}
            
            style={{color : props.mode=== 'dark'?'white':'black', backgroundColor : props.mode=== 'dark'?'#042743':'white'}}
            value={text}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleDwnClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleClear}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-primary mx-2 my-2" id="myBox" onClick={handleCopy}>
          Copy Text
        </button>
      </div>

      <div className="container" style={{color : props.mode=== 'dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the text box above to preview it here"}</p>
      </div>
    </>
  );
}
