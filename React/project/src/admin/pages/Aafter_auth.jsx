import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function Aafter_auth() {

  const Aauth_id=sessionStorage.getItem('a_id');
  return Aauth_id ? <Outlet/> : <Navigate to="/admin-login" replace /> ;

  return (
    <div>Uafter_auth</div>
  )
}

export default Aafter_auth