import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import HeaderComponent from './components/HeaderComp'
import ProjectsComponent from './components/ProjectsComp'
import AboutComponent from './components/AboutComp'
import FooterComponent from './components/FooterComp'
import ClsHeaderComponent from './components/ClsHeaderComp'
import ClsProjectsComponent from './components/ClsProjectsComp'
import ClsAboutComponent from './components/ClsAboutComp'
import ClsFooterComponent from './components/ClsFooterComp'

function App() {
  const [count, setCount] = useState(0)

  const logged = false;

  return (
    <>      
      <HeaderComponent />
      {
        logged && <ProjectsComponent />
      }
      <AboutComponent />
      <FooterComponent />

      {/* <ClsHeaderComponent />
      <ClsProjectsComponent />
      <ClsAboutComponent />
      <ClsFooterComponent /> */}
    </>
  )
}

export default App
