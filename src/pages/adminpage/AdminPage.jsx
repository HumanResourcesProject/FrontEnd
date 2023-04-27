import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Sidebar from '../../components/sidebar/Sidebar'
import './adminpage.scss'

const AdminPage = () => {
  return (
    <div>
        <Header/>
        <Sidebar/>
        <Footer/>
    </div>
  )
}

export default AdminPage