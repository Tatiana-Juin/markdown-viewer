import './componentsStyle.css'
import ReactMarkdown from "react-markdown";

export default function MarkdownPreview({text}) {
  return (
    <>
      <div  className="view-return" >
        {/* POUR RECUPERER LE TEXTE ET JUSTE LE LIRE */}
        
        <ReactMarkdown>{text}</ReactMarkdown>
        
      </div>
    </>
  )
}
