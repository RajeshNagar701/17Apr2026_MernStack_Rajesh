import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function Abefore_auth() {

  const Aauth_id=sessionStorage.getItem('a_id');
  return Aauth_id ? <Navigate to="/dashboard" replace />: <Outlet/> ;

  return (
    <div>Ubefore_auth</div>
  )
}

export default Abefore_auth