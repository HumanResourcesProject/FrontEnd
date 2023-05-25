import React from 'react'
import CardList from '../cards/CardList'
import './adminMain.scss'

 const AdminMain = () => {
  return (
  <div className="main-admin-container">
      <div className="small-boxes">
        <div className="box">
          <div className="box-left">
            <div className="upper">2</div>
            <div className="lower">All Employees</div>
          </div>
          <div className="box-right">
            <img
              src="https://img.icons8.com/?size=512&id=Z6pJyeccSgsz&format=png"
              className="icon"
              alt=""
            />
          </div>
        </div>
        <div className="box">
          <div className="box-left">
            <div className="upper">2</div>
            <div className="lower">My Employee Team</div>
          </div>
          <div className="box-right">
            <img
              src="https://img.icons8.com/?size=512&id=Z6pJyeccSgsz&format=png"
              className="icon"
              alt=""
            />
          </div>
        </div>
        <div className="box">
          <div className="box-left">
            <div className="upper">2</div>
            <div className="lower">My Team's Average Age</div>
          </div>
          <div className="box-right">
            <img
              src="https://img.icons8.com/?size=512&id=YnC1pvb1SFuQ&format=png"
              className="icon"
              alt=""
            />
          </div>
        </div>
        <div className="box">
          <div className="box-left">
            <div className="upper">2</div>
            <div className="lower">Company's Average Age</div>
          </div>
          <div className="box-right">
            <img
              src="https://img.icons8.com/?size=512&id=YnC1pvb1SFuQ&format=png"
              className="icon"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="cards">
      <CardList />
      </div>
    
  </div>
  )
}
export default AdminMain
