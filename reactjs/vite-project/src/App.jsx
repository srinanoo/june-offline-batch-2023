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

  const logged = true;

  const projectDetails = [
    {
      name: 'Project 1',
      description: 'Project 1 Description goes here...',
      image: 'images/background.jpeg',
    },
    {
      name: 'Project 2',
      description: 'Project 2 Description goes here...',
      image: 'images/background.jpeg',
    },
    {
      name: 'Project 3',
      description: 'Project 3 Description goes here...',
      image: 'images/background.jpeg',
    },
    {
      name: 'Project 4',
      description: 'Project 4 Description goes here...',
      image: 'images/background.jpeg',
    }
  ]

  return (
    <>      
      {/* <HeaderComponent />
      <ProjectsComponent name="Dinesh" details={projectDetails} />
      <AboutComponent />
      <FooterComponent /> */}

      <ClsHeaderComponent />
      <ClsProjectsComponent name="Dinesh" details={projectDetails} />
      <ClsAboutComponent />
      <ClsFooterComponent />
    </>
  )
}

export default App
