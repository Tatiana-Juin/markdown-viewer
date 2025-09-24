
import MarkdownPreview from './MarkdownPreview';
import './componentsStyle.css'
import {useState} from 'react'
export default function MarkdownInput() {

  // USESTATE POUR RECUPERER LE TEXTE 
  const [text,setText] = useState("")

  const handleReset = ()=>{
    setText("")
  }

  return (
    <>
        <button  onClick={handleReset} style={{backgroundColor:"white"}}> Reset </button>
        <div className='div-return'>
          <textarea onChange={(e) => setText(e.target.value)} name="" id=""  className='view-return' value={text}   />

          <MarkdownPreview text={text} />
        </div>

      
    </>
  )
}
