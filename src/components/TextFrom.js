import React,{useState} from 'react'
 

export default function TextFrom(props){
    const handleUpClick = ()=>{
        console.log("Upper case was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
}
const handleLoClick = ()=>{
    console.log("Upper case was clicked" + text)
    let newText = text.toLowerCase();
    setText(newText)
}
const handleClearClick = ()=>{
    console.log("Upper case was clicked" + text)
    let newText = '';
    setText(newText)
}

    const handleOnChange = (event)=>{
        console.log("on change");
        setText(event.target.value);

}
const handleCopy = () =>{
    console.log("I am copy");
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(Text.value);
}
const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join( ));
}
    const [text, setText] = useState('Enter text here2')

    return(
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#2f4668'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control-file" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color :props.mode==='dark'?'white':'#2f4668'}} 
            id="myBox" rows="8" cols="150"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Space</button>
        </div>
        <div className="container my-2" style={{color:props.mode==='dark'?'white':'#2f4668'}} >
        <h2>Your text sumary</h2>
        <p> {text.split(" ").length} word and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
    )
}