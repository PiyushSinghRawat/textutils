import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };
  const handleClearClick = () => {

    setText('');
    props.showAlert("text cleared succesfully!", "success");
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text); 
    props.showAlert("Copied to Clipboard!", "success");
}
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <div className={`mt-5 container text-${props.mode==='light'?'dark':'light'}`}>
      <div className="mb-3">
        <h1>{props.heading}</h1>         
        <textarea
          className="form-control "
          style={{color:props.mode==="light"?'black':'white',backgroundColor:props.mode==="light"?'white':'grey'}}
          id="exampleFormControlTextarea1"
          value={text}
          rows="8"
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleUpClick}>
        upperCase
      </button>
      <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleLoClick}>
        lowerCase
      </button>
      <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleClearClick}>
        clear
      </button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
<div className="mt-4">
    <h2 >Your Text Summary</h2>
    <p>you text contains {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <h3>preview</h3>
    <p>{text===''?'write some text':text}</p>
</div>
      
    </div>
  );
}
