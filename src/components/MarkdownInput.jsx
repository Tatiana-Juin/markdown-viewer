
import MarkdownPreview from './MarkdownPreview';
import './componentsStyle.css'
import {useState} from 'react'
export default function MarkdownInput() {

  // USESTATE POUR RECUPERER LE TEXTE 
  const [text,setText] = useState("")

  // FONCTION POUR RESET LE CODE 
  const handleReset = ()=>{
    setText("")
  }

  return (
    <>
        <div className='div-reset'>
            <button className='btn-reset'  onClick={handleReset} > Reset </button>
          
        </div>
       

        <div className='div-return'>
          <textarea onChange={(e) => setText(e.target.value)} name="" id=""  className='view-return' value={text}   />

          <MarkdownPreview text={text} />
        </div>

      
    </>
  )
}
