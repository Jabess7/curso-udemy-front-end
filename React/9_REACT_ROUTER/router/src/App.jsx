import './App.css'

import {Outlet} from "react-router-dom"
import NavBar from './components/NavBar'
import SearchForm from './components/SearchForm'

// 5 link entre paginas

function App() {
 
  return (
    <div>
      <NavBar/>
      <SearchForm/>
      <Outlet/>
      <p>Footer</p>
    </div>
  )
}

export default App
