import './App.css'
import { Main } from './components/Main/Main'
import { Header } from './components/Header/Header'
import { PopBrowser } from './components/PopBrowse/PopBrowse'
import { PopExit } from './components/PopExit/PopExit'
import { PopNewCard } from './components/PopNewCard/PopNewCard'


function App() {  

  return (
      <div className="wrapper"> 
        <PopExit/>
        <PopNewCard/>
        <PopBrowser/>
        <Header/>
        <Main/>

      </div>
  )
}

export default App
