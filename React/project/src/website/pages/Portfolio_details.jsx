import React from 'react'

function Portfolio_details() {
    return (
        <div>
            <section className="section">
                <div className="container">
                    {/* PROJECT META */}
                    <div className="row g-4 mb-5 reveal">
                        <div className="col-md-3 col-6">
                            <small className="text-slate-light text-uppercase fw-semibold" style={{ letterSpacing: '0.08em', fontSize: '0.75rem' }}>Client</small>
                            <p className="fw-semibold text-navy mb-0">Payflow Inc.</p>
                        </div>
                        <div className="col-md-3 col-6">
                            <small className="text-slate-light text-uppercase fw-semibold" style={{ letterSpacing: '0.08em', fontSize: '0.75rem' }}>Industry</small>
                            <p className="fw-semibold text-navy mb-0">FinTech</p>
                        </div>
                        <div className="col-md-3 col-6">
                            <small className="text-slate-light text-uppercase fw-semibold" style={{ letterSpacing: '0.08em', fontSize: '0.75rem' }}>Services</small>
                            <p className="fw-semibold text-navy mb-0">UI/UX, Development</p>
                        </div>
                        <div className="col-md-3 col-6">
                            <small className="text-slate-light text-uppercase fw-semibold" style={{ letterSpacing: '0.08em', fontSize: '0.75rem' }}>Timeline</small>
                            <p className="fw-semibold text-navy mb-0">10 weeks</p>
                        </div>
                    </div>
                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop" className="rounded-img w-100 mb-5 reveal" alt="Payflow dashboard hero screenshot" style={{ aspectRatio: '2/1', objectFit: 'cover' }} />
                    <div className="row g-5">
                        <div className="col-lg-8 reveal">
                            <span className="eyebrow">The challenge</span>
                            <h2 className="mb-3">A dashboard users were avoiding</h2>
                            <p className="mb-4">Payflow's payment analytics dashboard had grown organically over five years, accumulating dense tables, inconsistent navigation and confusing terminology. Internal data showed only 22% of users opened the dashboard more than once a month — most relied on exported spreadsheets instead.</p>
                            <span className="eyebrow">Our approach</span>
                            <h2 className="mb-3">Research-led redesign, shipped in phases</h2>
                            <p className="mb-3">We began with 14 user interviews and a full audit of support tickets to identify the top friction points. From there, we restructured the information architecture around three core workflows: monitoring, reconciliation and reporting.</p>
                            <p className="mb-4">Rather than a full rebuild, we shipped the new dashboard in three phases — each validated with a beta group of 40 users before wider rollout, minimizing disruption to daily operations.</p>
                            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=500&fit=crop" className="rounded-img w-100 mb-4" alt="Redesigned analytics interface" style={{ aspectRatio: '16/9', objectFit: 'cover' }} />
                            <span className="eyebrow">The result</span>
                            <h2 className="mb-3">A dashboard people actually use</h2>
                            <p className="mb-4">Within three months of full rollout, weekly active usage of the dashboard rose sharply and support tickets related to reporting confusion dropped significantly. The new design system also became the foundation for Payflow's mobile app redesign, completed by their internal team six months later.</p>
                            <blockquote className="border-start border-3 ps-4 py-2 mb-4" style={{ borderColor: 'var(--n-primary) !important' }}>
                                <p className="fs-5 fst-italic text-navy mb-2">"Nexora didn't just make it prettier — they fundamentally rethought how our users work with data. The phased rollout meant zero disruption to our team."</p>
                                <footer className="text-slate small">— Head of Product, Payflow Inc.</footer>
                            </blockquote>
                        </div>
                        {/* SIDEBAR */}
                        <div className="col-lg-4 reveal">
                            <div className="widget">
                                <h5>Results at a glance</h5>
                                <ul className="widget-link-list">
                                    <li>Weekly active usage <span className="text-success fw-bold">+64%</span></li>
                                    <li>Support tickets <span className="text-success fw-bold">−38%</span></li>
                                    <li>Avg. session time <span className="text-success fw-bold">+2.1x</span></li>
                                    <li>Time to first insight <span className="text-success fw-bold">−51%</span></li>
                                </ul>
                            </div>
                            <div className="widget">
                                <h5>Tech &amp; Tools</h5>
                                <div className="d-flex flex-wrap gap-2">
                                    <span className="badge-soft">Figma</span>
                                    <span className="badge-soft">React</span>
                                    <span className="badge-soft">D3.js</span>
                                    <span className="badge-soft">Node.js</span>
                                    <span className="badge-soft">PostgreSQL</span>
                                </div>
                            </div>
                            <div className="widget bg-gradient-dark text-white border-0">
                                <div className="icon-box icon-box-white mb-3"><i className="bi bi-rocket-takeoff" /></div>
                                <h5 className="text-white">Like what you see?</h5>
                                <p className="text-white-50 small mb-3">Let's talk about your product's next chapter.</p>
                                <a href="contact.html" className="btn btn-primary w-100">Start a Project</a>
                            </div>
                        </div>
                    </div>
                    {/* PROJECT NAVIGATION */}
                    <div className="row mt-5 pt-4 border-top reveal">
                        <div className="col-6">
                            <a href="portfolio-single.html" className="text-decoration-none">
                                <small className="text-slate-light d-block mb-1"><i className="bi bi-arrow-left me-1" /> Previous</small>
                                <span className="fw-bold text-navy">Cloudra Brand Identity</span>
                            </a>
                        </div>
                        <div className="col-6 text-end">
                            <a href="portfolio-single.html" className="text-decoration-none">
                                <small className="text-slate-light d-block mb-1">Next <i className="bi bi-arrow-right ms-1" /></small>
                                <span className="fw-bold text-navy">Metricly Analytics Platform</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Portfolio_details