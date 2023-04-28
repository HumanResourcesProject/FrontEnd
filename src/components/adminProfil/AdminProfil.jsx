import React from 'react'
import './adminProfil.scss'

const ProfilPage = () => {
  const update = () => {
    const gizlenecekDiv = document.getElementById('gizlenecekDiv')
    const gosterilecekDiv = document.getElementById('gosterilecekDiv')
    gizlenecekDiv.style.display = 'none'
    gosterilecekDiv.style.display = 'block'
  }
  const refresh = () => {
    window.location.reload()
  }

  return (
    <div className='profil'>
      <div className='photoSection'>
        <div className='profileHolder'>
          <h2>Profil Photo</h2>
          <div className='profileImage'>
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" alt="Rengoku" />
          </div>
        </div>
        <div className='buttons'>
          <button className='selectButton'>Select Photo</button>
          <button className='saveButton'>Save</button>
        </div>
      </div>
      <div className='profilInfo'>
        <div className='informationHead'>
          <h2>Profil Information</h2>
        </div>
        <div id="gizlenecekDiv" className='information'>
          <form action="">
            <label for="ad">Ad:</label>
            <p>John</p><br/><br/>
            <label for="soyad">Soyad:</label>
            <p>Doe</p><br/><br/>
            <label for="email">E-posta:</label>
            <p>johndoe@example.com </p><br/><br/>
            <label for="sifre">Şifre:</label>
            <input type="password" id="sifre" name="sifre" value="sifre123"></input><br/><br/>
              <button type="button" onClick={update}>Update</button>
            </form>
        </div>
        <div id="gosterilecekDiv" className='information'>
          <form action="">
            <label for="ad">Ad:</label>
            <input type="text" id="ad" name="ad" placeholder='Enter name'></input><br/><br/>
            <label for="soyad">Soyad:</label>
            <input type="text" id="soyad" name="soyad" value="Doe"></input><br/><br/>
            <label for="email">E-posta:</label>
            <input type="email" id="email" name="email" value="johndoe@example.com"></input><br/><br/>
            <label for="sifre">Şifre:</label>
            <input type="password" id="sifre" name="sifre" value="sifre123"></input><br/><br/>
              <button type="button" onClick={refresh}>Update Informations</button>
              <button type='button'onClick={refresh}>Cancel</button>
            </form>
        </div>
      </div>
    </div>
    
  )
}
          export default ProfilPage
