import React, { useState } from 'react'
// import { getFID } from 'web-vitals'      

export default function TextForm(props) {
    const upClick = () => {
        // console.log("Uppercase was clicked")
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert(' Converted to uppercase','success')
    }
    const downClick = () => {
        // console.log("Lowercase was clicked")
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert(' Converted to lowercase','success')
    }
    const clearClick = () => {
        // console.log("Clear text was clicked")
        let newText = ("")
        setText(newText)
        props.showAlert(' Text has been cleared','success')
    }
    const copyClick = () => {
        // console.log("Copy text was clicked")
        let text = document.getElementById("myBox")
        text.select()
        text.setSelectionRange(0, 9999)
        navigator.clipboard.writeText(text.value)
        props.showAlert(' Text has been copied','success')
    }
    const extraSpace = () => {
        // console.log("Remove extra space was clicked")
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert(' Extra space has been removed','success')
    }

    const change = (event) => {
        // console.log("On change")
        setText(event.target.value)
    }

    const [text, setText] = useState('')
    return (
        <>
            <div div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={change} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary" onClick={upClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={downClick}>Convert to Lowercase</button>
                <button className="btn btn-primary" onClick={clearClick}>Clear text</button>
                <button className="btn btn-primary mx-2" onClick={copyClick}>Copy text</button>
                <button className="btn btn-primary" onClick={extraSpace}>Remove Extra Spaces</button>
            </div >
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes to read the above text</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter the text in the above textbox to preview it here!!!..."}</p>
            </div>
        </>
    )
}   