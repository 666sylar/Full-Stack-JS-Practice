import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import styles from './App.module.sass'
import Header from './components/Header/index.jsx'
import NotFoundPage from './pages/NotFoundPage/index.jsx'
import PhoneListPage from './pages/PhoneListPage/index.jsx'
import PhoneFormPage from './pages/PhoneFormPage/index.jsx'

function App () {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<PhoneListPage />} />
        <Route path='/create' element={<PhoneFormPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Router>
  )
}

export default App
