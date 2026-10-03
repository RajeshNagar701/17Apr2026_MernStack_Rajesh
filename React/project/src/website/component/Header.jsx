import React from 'react'
import { NavLink } from 'react-router-dom'

function Header({title}) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-nexora fixed-top">
                <div className="container">
                    <a className="navbar-brand navbar-brand-custom" href="index.html">Nexora<span>.</span></a>
                    <button className="navbar-toggler navbar-toggler-custom" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="bar" /><span className="bar" /><span className="bar" />
                    </button>
                    <div className="collapse navbar-collapse" id="mainNav">
                        <ul className="navbar-nav ms-auto align-items-lg-center gap-1 mt-3 mt-lg-0">
                            <li className="nav-item"><NavLink className="nav-link nav2" to="/">Home</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link nav2" to="/about">About</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link nav2" to="/services">Services</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link nav2" to="/portfolio">Portfolio</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link nav2" to="/blog">Blog</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link nav2" to="/pricing">Pricing</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link nav2" to="/contact">Contact</NavLink></li>
                            <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
                                <NavLink to="/contact" className="btn btn-primary btn-sm-custom w-100">Get Started</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* PAGE HEADER */}
            <header className="page-header">
                <div className="container">
                    <h1 className="mb-3">{title}</h1>
                    <div className="breadcrumb-custom">
                        <a href="index.html">Home</a> <span>/</span> <span className="active">{title}</span>
                    </div>
                </div>
            </header>
        </div>

    )
}

export default Header