import React from 'react'

 const AdminMain = () => {
  return (
    <form className="form-admin">
        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" pattern="[A-Za-z0-9._+-]+@[A-Za-z0-9 -]+\.[a-z]{2,}" required id="email" title="must be a valid email address" />
        </div>
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input title="Must be at least 8 characters" pattern="[a-zA-Z0-9]{8,}" id="password" required type="password"/>
            <p className="input-hint">Must be at least 8 characters</p>
        </div>
        <button>Submit</button>
    </form>
  )
}
export default AdminMain
