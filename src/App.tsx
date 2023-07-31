import { routes } from "./Router/Router"
import {  Route, Routes } from 'react-router-dom'
import { Header } from "./Components/Header"
import styles from './Styles/App.module.sass'

const App = () => {

  return (
    <div className={styles.app}>
      <Header />
      <Routes>
        {routes.map((page) => <Route key={page.path} path={page.path} element={page.element} />)}
      </Routes>
    </div>
  )
}

export default App