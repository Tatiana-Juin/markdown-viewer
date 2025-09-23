import "./markdownPreview.css"

export default function MarkdownPreview({text,setText}) {
  return (
    <div >
      {/* POUR RECUPERER LE TEXTE ET JUSTE LE LIRE */}
       <textarea value={text} onChange={(e) => setText(e.target.value)} readOnly >
        {text}
        </textarea>
    </div>
  )
}
