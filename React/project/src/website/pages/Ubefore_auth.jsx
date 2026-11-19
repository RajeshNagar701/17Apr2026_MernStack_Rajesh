import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function Ubefore_auth() {

  const Aauth_id=sessionStorage.getItem('u_id');
  return Aauth_id ? <Navigate to="/" replace />: <Outlet/> ;

  return (
    <div>Ubefore_auth</div>
  )
}

export default Ubefore_auth