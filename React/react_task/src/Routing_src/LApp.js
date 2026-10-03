/*
What is React Router?
React Router is a library that provides routing capabilities for React applications.
Routing means handling navigation between different views.
React Router is the standard routing library for React applications. It enables you to:

Create multiple pages in your single-page application
Handle URL parameters and query strings
Manage browser history and navigation
Create nested routes and layouts
Implement protected routes for authentication

npm install react-router-dom

   Routing : <BrowserRouter> <Routes> <Route>
   Link : Navlink , Link
   Redirect : useNavigate() redirect

*/



import React from 'react'
import Lhome from './website/pages/Lhome'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Labout from './website/pages/Labout'
import Lcontact from './website/pages/Lcontact'
import Lheader from './website/component/Lheader'
import Lfooter from './website/component/Lfooter'

function LApp() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<><Lheader /><Lhome /><Lfooter /></>}></Route>
                <Route path="/about" element={<><Lheader /><Labout /><Lfooter /></>}></Route>
                <Route path="/contact" element={<><Lheader /><Lcontact /><Lfooter /></>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default LApp