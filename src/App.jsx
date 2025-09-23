
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MarkdownInput from './components/MarkdownInput'
import MarkdownPreview from './components/MarkdownPreview'

function App() {
  

  return (
    <div >
      <h1 className='title'>Mardown Viewer</h1>
      
      <MarkdownInput />

      {/* <MarkdownPreview /> */}
    </div>
  )
}

export default App
