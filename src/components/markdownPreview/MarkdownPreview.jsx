import "./markdownPreview.css"
import ReactMarkdown from "react-markdown";

export default function MarkdownPreview({text}) {
  return (
    <div  style={{width:"50vw",height:"70vh"}} >
      {/* POUR RECUPERER LE TEXTE ET JUSTE LE LIRE */}
      
      <ReactMarkdown>{text}</ReactMarkdown>
      
    </div>
  )
}
