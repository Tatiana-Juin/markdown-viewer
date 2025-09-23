import './markdownInput.css'
import MarkdownPreview from '../markdownPreview/MarkdownPreview';

import {useState} from 'react'
export default function MarkdownInput() {

  // USESTATE POUR RECUPERER LE TEXTE ET LE METTRE DANS UN TABLEAU INITIALISATION
 
  const [text,setText] = useState("")

  

  return (
    <div>

        <div style={{display:"flex",flexDirection:"column"}}>
          <textarea onChange={(e) => setText(e.target.value)} name="" id=""  style={{width:"50vw",height:"70vh"}}    />
          
      </div>

      <MarkdownPreview text={text} />
    </div>
  )
}
