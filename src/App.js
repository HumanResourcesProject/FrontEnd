import React from 'react'
import AdminPage from './pages/adminpage/AdminPage'
import { Routes, Route, Navigate} from "react-router-dom"
const App = () => {
  return (
    <Routes>
      <Route path ="/" element={<AdminPage/>}/>
      <Route path="*" element={<Navigate to="/"/>} />
    </Routes>
    
  )
}

export default App