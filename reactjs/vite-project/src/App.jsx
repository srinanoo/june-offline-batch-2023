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
import { MutipleFunction1, MutipleFunction2, MutipleFunction3 } from './components/MultipleFuncComp'
import { MultipleClsComponent1, MultipleClsComponent2, MultipleClsComponent3 } from './components/MultipleClsComp'
import { MultipleFuncClsComponent1, MultipleFuncClsComponent2 } from './components/MultipleFuncClsComp'
import FnStateComponent from './components/FnStateComp'
import ClsStateComponent from './components/ClsStateComp'

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
  ];

  return (
    <>      
      {/* <HeaderComponent />
      <ProjectsComponent name="Dinesh" details={projectDetails} />
      <AboutComponent />
      <FooterComponent /> */}
      {/* <MutipleFunction1 />
      <MutipleFunction2 />
      <MutipleFunction3 /> */}

      {/* <ClsHeaderComponent />
      <ClsProjectsComponent name="Dinesh" details={projectDetails} />
      <ClsAboutComponent />
      <ClsFooterComponent /> */}
      {/* <MultipleClsComponent1 />
      <MultipleClsComponent2 />
      <MultipleClsComponent3 /> */}

      {/* <MultipleFuncClsComponent1 />
      <MultipleFuncClsComponent2 /> */}

      <FnStateComponent name="Dinesh" />

      {/* <ClsStateComponent /> */}

      <MultipleFuncClsComponent1 />
    </>
  )
}

export default App
