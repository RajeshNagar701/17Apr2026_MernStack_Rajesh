import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function Uafter_auth() {

  const Aauth_id=sessionStorage.getItem('u_id');
  return Aauth_id ? <Outlet/> : <Navigate to="/" replace /> ;

  return (
    <div>Uafter_auth</div>
  )
}

export default Uafter_auth