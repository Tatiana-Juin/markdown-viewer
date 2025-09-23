import './markdownInput.css'
import MarkdownPreview from '../markdownPreview/MarkdownPreview';

import {useState,onChange} from 'react'
export default function MarkdownInput() {

  // USESTATE POUR RECUPERER LE TEXTE ET LE METTRE DANS UN TABLEAU INITIALISATION
  const [tabText,setTabText] = useState([]);
  const [text,setText] = useState("")

  // POUR MODIFIER LA VALEUR DU TEXTE
  const handleChange = (e) =>{
    setText(e.target.value)
  }

  return (
    <div>

        <div style={{display:"flex",flexDirection:"column"}}>
          <textarea onChange={handleChange} name="" id=""  style={{width:"50vw",height:"70vh"}}    ></textarea>
          
      </div>

      <MarkdownPreview text={text} setText={setText}/>
    </div>
  )
}
