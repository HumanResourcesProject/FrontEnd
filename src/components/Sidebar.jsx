import React from "react";
import '../assets/styles/sidebar.scss'
const Sidebar = () => {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <a href="" className="brand-link">
        <span className="brand-text font-weight-light">HumanResources</span>
      </a>
      <div className="sidebar">
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img
              src="https://images.unsplash.com/photo-1682478695074-9e47f09a7459?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              className="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div className="info">
            <a href="#" className="d-block">
              Mahmut Tuncer
            </a>
          </div>
        </div>

        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
           
            <li className="nav-item">
              <a href="" className="nav-link">
                <i className="nav-icon fas fa-th"></i>
                <p>
                  Kullanıcı Kayıt
                </p>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-copy"></i>
                <p>
                  Profil
                  <i className="fas fa-angle-left right"></i>
                  
                </p>
              </a>
             
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-copy"></i>
                <p>
                  Kullanıcıları Listele
                  <i className="fas fa-angle-left right"></i>
                </p>
              </a>
             
            </li>
            
          </ul>
        </nav>
      </div>
    </aside>
  );
};
export default Sidebar;
