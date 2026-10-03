import React from 'react'
import { NavLink } from 'react-router-dom'

function H_Header() {
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
            {/* HERO */}
            <header className="hero">
                <div className="container">
                    <div className="row align-items-center gy-5">
                        <div className="col-lg-6 hero-content">
                            <span className="eyebrow">Trusted by 480+ growing companies</span>
                            <h1 className="mb-4">Build, launch and scale your <span className="text-primary-custom">digital product</span> faster.</h1>
                            <p className="fs-5 mb-4" style={{ maxWidth: 540 }}>Nexora is your end-to-end product partner — strategy, design and engineering teams that ship measurable results for SaaS and tech-driven businesses.</p>
                            <div className="d-flex flex-wrap gap-3 mb-4 justify-content-lg-start justify-content-center">
                                <a href="contact.html" className="btn btn-primary btn-lg-custom">Start a Project <i className="bi bi-arrow-right ms-1" /></a>
                                <a href="services.html" className="btn btn-light-custom btn-lg-custom">Explore Services</a>
                            </div>
                            <div className="d-flex align-items-center gap-3 justify-content-lg-start justify-content-center">
                                <div className="d-flex">
                                    <img src="https://i.pravatar.cc/40?img=12" className="rounded-circle border border-2 border-white" style={{ width: 38, height: 38, marginRight: '-10px' }} alt="Client avatar" />
                                    <img src="https://i.pravatar.cc/40?img=32" className="rounded-circle border border-2 border-white" style={{ width: 38, height: 38, marginRight: '-10px' }} alt="Client avatar" />
                                    <img src="https://i.pravatar.cc/40?img=45" className="rounded-circle border border-2 border-white" style={{ width: 38, height: 38 }} alt="Client avatar" />
                                </div>
                                <div>
                                    <div className="stars mb-0" style={{ color: '#FFB400', fontSize: '0.85rem' }}>★★★★★ <span className="text-navy fw-semibold">4.9/5</span></div>
                                    <small className="text-slate">from 320+ client reviews</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="hero-visual position-relative mx-auto" style={{ maxWidth: 480 }}>
                                <div className="hero-mock-card">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <div className="d-flex gap-2">
                                            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FF5F56', display: 'block' }} />
                                            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FFBD2E', display: 'block' }} />
                                            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#27C93F', display: 'block' }} />
                                        </div>
                                        <span className="badge-soft">Live</span>
                                    </div>
                                    <div className="mock-bar" style={{ width: '90%' }} />
                                    <div className="mock-bar" style={{ width: '65%' }} />
                                    <div className="row g-2 my-3">
                                        <div className="col-6">
                                            <div className="p-3 rounded-3" style={{ background: 'var(--n-bg-alt)' }}>
                                                <i className="bi bi-graph-up-arrow text-primary-custom fs-4" />
                                                <div className="fw-bold text-navy mt-2 font-display">+148%</div>
                                                <small className="text-slate">Conversions</small>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="p-3 rounded-3" style={{ background: '#F4F0FF' }}>
                                                <i className="bi bi-people text-primary-custom fs-4" style={{ color: 'var(--n-secondary) !important' }} />
                                                <div className="fw-bold text-navy mt-2 font-display">12.4k</div>
                                                <small className="text-slate">Active Users</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mock-bar" style={{ width: '100%', height: 70, borderRadius: 10, background: 'linear-gradient(90deg, var(--n-bg-alt), #F4F0FF)' }} />
                                </div>
                                <div className="hero-float-badge badge-1 d-none d-sm-flex">
                                    <div className="icon-box icon-box-success" style={{ width: 36, height: 36, borderRadius: 10, fontSize: '1.1rem' }}><i className="bi bi-check-lg" /></div>
                                    <div>Project Delivered<br /><small className="text-slate fw-normal">On time, every time</small></div>
                                </div>
                                <div className="hero-float-badge badge-2 d-none d-sm-flex">
                                    <div className="icon-box icon-box-primary" style={{ width: 36, height: 36, borderRadius: 10, fontSize: '1.1rem' }}><i className="bi bi-lightning-charge-fill" /></div>
                                    <div>Avg. 3.2x ROI<br /><small className="text-slate fw-normal">within 6 months</small></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>

    )
}

export default H_Header