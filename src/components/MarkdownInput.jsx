
import MarkdownPreview from './MarkdownPreview';
import './componentsStyle.css'
import {useState} from 'react'
export default function MarkdownInput() {

  // USESTATE POUR RECUPERER LE TEXTE 
  const [text,setText] = useState("")
  // pour afficher le message - boolean 
  

  // FONCTION POUR RESET LE CODE 
  const handleReset = ()=>{
    setText("")
  }

  // FONCTION POUR COPIER LE TEXT 
  // const handleCopy = () =>{

  //   navigator.clipboard.writeText(text)
  //   .then(() =>{
  //     alert("text copier")
  //   } )
  //   .catch(err =>{
  //     console.error("erreur",err)
  //   })
  // }

  const handleCopy = () =>{
    // SI LE TEXTE N'EST PAS VIDE 
    if(text.trim()){
      navigator.clipboard.writeText(text)
      .then(() =>{
        alert("Le texte à etait copier ")
      } )
      .catch(err =>{
        console.error("erreur",err)
      })
    }
   
  }

  return (
    <>
      {/* POUR LE RESET  */}
        <div className='div-reset'>
            <button className='btn-reset'  onClick={handleReset} > Reset </button>
            <button className='btn-reset' onClick={handleCopy}> Copier </button>
          
        </div>

       
       
        {/* POUR SAISIR LE TEXTE  */}
        <div className='div-return'>
          <textarea onChange={(e) => setText(e.target.value)} name="" id=""  className='view-return' value={text}   />
          
          {/* APPELLE DU COMPOSANY POUR AFFICHER LE RESULTAT A COTER  */}
          <MarkdownPreview text={text} />
        </div>

      
    </>
  )
}
