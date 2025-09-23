
import MarkdownPreview from './MarkdownPreview';
import './componentsStyle.css'
import {useState} from 'react'
export default function MarkdownInput() {

  // USESTATE POUR RECUPERER LE TEXTE ET LE METTRE DANS UN TABLEAU INITIALISATION
 
  const [text,setText] = useState("")

  

  return (
    <>

        <div className='div-return'>
          <textarea onChange={(e) => setText(e.target.value)} name="" id=""  className='view-return'    />
          <MarkdownPreview text={text} />
        </div>

      
    </>
  )
}
