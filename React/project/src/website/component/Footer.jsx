import React from 'react'

function Footer() {
    return (
        <div>
            {/* FOOTER */}
            <footer className="footer-nexora">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-4 col-md-6">
                            <a className="navbar-brand-custom d-inline-block mb-3" href="index.html" style={{ color: '#fff !important' }}>Nexora<span style={{ color: 'var(--n-primary)' }}>.</span></a>
                            <p className="text-white-50 mb-4" style={{ maxWidth: 320 }}>We help ambitious SaaS and tech companies design, build and scale digital products that customers love.</p>
                            <div className="d-flex gap-2">
                                <a href="#" className="social-icon"><i className="bi bi-twitter-x" /></a>
                                <a href="#" className="social-icon"><i className="bi bi-linkedin" /></a>
                                <a href="#" className="social-icon"><i className="bi bi-dribbble" /></a>
                                <a href="#" className="social-icon"><i className="bi bi-instagram" /></a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-6">
                            <h6>Company</h6>
                            <a href="about.html">About Us</a>
                            <a href="services.html">Services</a>
                            <a href="portfolio.html">Portfolio</a>
                            <a href="blog.html">Blog</a>
                            <a href="contact.html">Careers</a>
                        </div>
                        <div className="col-lg-2 col-md-6 col-6">
                            <h6>Services</h6>
                            <a href="service-details.html">Product Strategy</a>
                            <a href="service-details.html">UI/UX Design</a>
                            <a href="service-details.html">Web Development</a>
                            <a href="service-details.html">Cloud &amp; DevOps</a>
                            <a href="service-details.html">Growth Marketing</a>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <h6>Stay in the loop</h6>
                            <p className="text-white-50 mb-3">Get product updates and insights from our team, once a month.</p>
                            <form className="d-flex gap-2 needs-validation" noValidate>
                                <input type="email" className="form-control" placeholder="Work email" required style={{ background: 'rgba(255,255,255,0.06)', borderColor: 'rgba(255,255,255,0.12)', color: '#fff' }} />
                                <button className="btn btn-primary flex-shrink-0" type="submit"><i className="bi bi-send" /></button>
                            </form>
                        </div>
                    </div>
                    <div className="footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center gap-2 text-center text-md-start">
                        <p className="mb-0" style={{ display: 'flex' }}>© 2026 Nexora. All rights reserved by <a target="_blank" href="https://github.com/HarshadMahadik" style={{ color: 'white', paddingLeft: 5 }}> Harshad Mahadik</a> • Distributed by <a target="_blank" href="https://themewagon.com/" style={{ color: 'white', paddingLeft: 5 }}>Themewagon</a>
                        </p>
                        <div className="d-flex gap-4">
                            <a href="#" className="mb-0">Privacy Policy</a>
                            <a href="#" className="mb-0">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>
            <button className="back-to-top" aria-label="Back to top"><i className="bi bi-arrow-up" /></button>
        </div>

    )
}

export default Footer