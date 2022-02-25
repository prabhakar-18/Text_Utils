import React, { useState } from 'react'



export default function TextForm(props) {
    const [text, setText] = useState('');
    const clickupbhandle = () => {
        // console.log("Upper case was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showalert("Converted to upper case", "Succes");
    }
    const clickdownbhandle = () => {
        // console.log("Upper case was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showalert("Converted to lowercase", "Succes");

    }
    const clickclearbhandle = () => {
        // console.log("Upper case was clicked" + text);
        let newText = ' ';
        setText(newText)
        props.showalert("Text clear", "Succes");

    }
    const clickcopyhandle = () => {
        // console.log("Upper case was clicked" + text);
        // var newText = document.getElementById("mybox");
        navigator.clipboard.writeText(text);
        
    }
    const clearspace = () => {
        var newText = text.split(/[  ]+/);
        setText(newText.join(" "));
    }

    const handleonChange = (event) => {
        // console.log("On Changed");
        setText(event.target.value)
    }

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1 className='mb4'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleonChange} style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="mybox" rows="8"></textarea>
                </div>
                <div className="container">
                    <div className="container my-5" >

                        <button disable={text.length===0}className="btn btn-primary  mx-1   my-1"  onClick={clickupbhandle}>Convert to upper case</button>
                        <button disable={text.length===0} className="btn btn-primary  mx-1  my-1"  onClick={clickdownbhandle}>Cobvert to lower case</button>
                        <button disable={text.length===0} className="btn btn-primary mx-1  my-1"  onClick={clickcopyhandle}>Copy Text</button>
                        <button disable={text.length===0} className="btn btn-primary mx-1  my-1"  onClick={clearspace}>Clear Space</button>
                        <button disable={text.length===0} className="btn btn-primary mx-1  my-1"  onClick={clickclearbhandle}>Clear Text</button>
                    </div>

                </div>



            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>your text summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} charecters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
                <h2>preview</h2>
                <p>{text.length > 0 ? text : "Nothing to prevew"}</p>
            </div>
        </>
    )
}
