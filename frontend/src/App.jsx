
import React from 'react'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import CreateAssistant from './components/pages/CreateAssistant.jsx'
import {Routes,Route} from 'react-router-dom'
import AIHomePage from './components/pages/AIHomePage.jsx'
const App = () => {
  return (
     <>

     <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/create-assistant' element={<CreateAssistant/>}/>
       <Route path='/assistant' element={<AIHomePage/>}/>
     </Routes>

     </>
  )
}

export default App