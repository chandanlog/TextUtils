import React,{useState} from 'react'
 

export default function TextFrom(props){
    const handleUpClick = ()=>{
        //console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
}
const handleLoClick = ()=>{
    //console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
}
const handleClearClick = ()=>{
    //console.log("Lowercase was clicked" + text);
    let newText = '';
    setText(newText)
}
    const handleOnChange = (event)=>{
        //console.log("on change");
        setText(event.target.value)
}
    const handleCopy = ()=>{
        //console.log(handleCopy);
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
}
    const handleExtraSpace = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const [text, setText] = useState('');

    return(
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control-file" value={text} onChange={handleOnChange} id="myBox" rows="8" cols="150"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Etra Space</button>
        </div>
        <div className="container my-3">
            <h2>your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read </p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
