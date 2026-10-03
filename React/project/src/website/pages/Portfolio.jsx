import React from 'react'

function Portfolio() {
    return (
        <div>
            {/* FILTERS */}
            <section className="section pb-0">
                <div className="container">
                    <div className="row section-header justify-content-center text-center">
                        <div className="col-lg-7 reveal">
                            <span className="eyebrow">Case studies</span>
                            <h2 className="section-title">Work we're proud of</h2>
                            <p className="section-subtitle mx-auto">A selection of recent engagements across industries and project types.</p>
                        </div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-center gap-2 mb-5 reveal">
                        <button className="btn btn-primary btn-sm-custom filter-btn active" data-filter="all">All Work</button>
                        <button className="btn btn-light-custom btn-sm-custom filter-btn" data-filter="design">Product Design</button>
                        <button className="btn btn-light-custom btn-sm-custom filter-btn" data-filter="dev">Development</button>
                        <button className="btn btn-light-custom btn-sm-custom filter-btn" data-filter="brand">Branding</button>
                    </div>
                </div>
            </section>
            {/* PORTFOLIO GRID */}
            <section className="section pt-0">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-4 reveal" data-category="design">
                            <a href="portfolio-single.html" className="portfolio-card d-block">
                                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=450&fit=crop" alt="Payflow dashboard redesign" />
                                <div className="portfolio-overlay">
                                    <span>FinTech · Product Design</span>
                                    <h5>Payflow Dashboard Redesign</h5>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-6 col-lg-4 reveal" data-category="dev">
                            <a href="portfolio-single.html" className="portfolio-card d-block">
                                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=450&fit=crop" alt="Metricly analytics platform" />
                                <div className="portfolio-overlay">
                                    <span>SaaS · Web Development</span>
                                    <h5>Metricly Analytics Platform</h5>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-6 col-lg-4 reveal" data-category="brand">
                            <a href="portfolio-single.html" className="portfolio-card d-block">
                                <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=450&fit=crop" alt="Carewise patient app branding" />
                                <div className="portfolio-overlay">
                                    <span>HealthTech · Branding</span>
                                    <h5>Carewise Patient App</h5>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-6 col-lg-4 reveal" data-category="dev">
                            <a href="portfolio-single.html" className="portfolio-card d-block">
                                <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=450&fit=crop" alt="Orbiq CRM platform build" />
                                <div className="portfolio-overlay">
                                    <span>B2B SaaS · Development</span>
                                    <h5>Orbiq CRM Platform</h5>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-6 col-lg-4 reveal" data-category="design">
                            <a href="portfolio-single.html" className="portfolio-card d-block">
                                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=451&fit=crop" alt="Verta mobile banking UI" />
                                <div className="portfolio-overlay">
                                    <span>FinTech · UI Design</span>
                                    <h5>Verta Mobile Banking App</h5>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-6 col-lg-4 reveal" data-category="brand">
                            <a href="portfolio-single.html" className="portfolio-card d-block">
                                <img src="https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&h=450&fit=crop" alt="Cloudra brand identity" />
                                <div className="portfolio-overlay">
                                    <span>Cloud Infrastructure · Branding</span>
                                    <h5>Cloudra Brand Identity</h5>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-6 col-lg-4 reveal" data-category="dev">
                            <a href="portfolio-single.html" className="portfolio-card d-block">
                                <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=450&fit=crop" alt="Flowbit automation tool" />
                                <div className="portfolio-overlay">
                                    <span>Productivity SaaS · Development</span>
                                    <h5>Flowbit Automation Suite</h5>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-6 col-lg-4 reveal" data-category="design">
                            <a href="portfolio-single.html" className="portfolio-card d-block">
                                <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=450&fit=crop" alt="Northpeak consulting site design" />
                                <div className="portfolio-overlay">
                                    <span>Consulting · Web Design</span>
                                    <h5>Northpeak Consulting Site</h5>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-6 col-lg-4 reveal" data-category="brand">
                            <a href="portfolio-single.html" className="portfolio-card d-block">
                                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=450&fit=crop" alt="Pivotal agency rebrand" />
                                <div className="portfolio-overlay">
                                    <span>Marketing Agency · Branding</span>
                                    <h5>Pivotal Agency Rebrand</h5>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* CTA */}
            <section className="section pt-0">
                <div className="container">
                    <div className="cta-section reveal">
                        <div className="row align-items-center">
                            <div className="col-lg-8">
                                <h2 className="mb-2">Have a project in mind?</h2>
                                <p className="mb-0 fs-5">Let's discuss how we can bring it to life.</p>
                            </div>
                            <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
                                <a href="contact.html" className="btn btn-primary btn-lg-custom">Start a Project <i className="bi bi-arrow-right ms-1" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Portfolio