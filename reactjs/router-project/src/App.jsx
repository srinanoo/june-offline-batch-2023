import './App.css'

import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';

import MenuComponent from './components/MenuComp';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage'
import HeaderComponent from './components/HeaderComp';
import FooterComponent from './components/FooterComp';
import LayoutPage from './pages/LayoutPage';
import CEOPage from './pages/CEOPage';

function App() {

  // console.log(location);

  return (
    <>
      {/* <MenuComponent />
      {
        (window.location.pathname === "/" && <HomePage />)
      }
      {
        (window.location.pathname === "/about" && <AboutPage />)
      }
      {
        (window.location.pathname === "/contact" && <ContactPage />)
      }
      {
        (window.location.pathname === "/blog" && <BlogPage />)
      } */}

      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<LayoutPage />}>
            <Route index element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/about/ceo' element={<CEOPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/blog' element={<BlogPage />} />
          </Route>
        </Routes>
      </BrowserRouter> */}

      <HashRouter>
        <Routes>
          <Route path='/' element={<LayoutPage />}>
            <Route index element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/about/ceo' element={<CEOPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/blog' element={<BlogPage />} />
          </Route>
        </Routes>
      </HashRouter>

    </>
  )
}

export default App
