import React from 'react'

function Pricing_details() {
    return (
        <div>
            <section className="section">
                <div className="container">
                    <div className="row g-5">
                        {/* MAIN CONTENT */}
                        <div className="col-lg-8 reveal">
                            <img src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=900&h=500&fit=crop" className="rounded-img w-100 mb-4" alt="UI design wireframes on screen" style={{ aspectRatio: '16/9', objectFit: 'cover' }} />
                            <span className="eyebrow">Service overview</span>
                            <h2 className="mb-3">Interfaces that look great and convert better</h2>
                            <p className="mb-4">Good design isn't decoration — it's the difference between a user completing a checkout flow or abandoning it. Our UI/UX design service covers everything from early research to a fully documented design system, handed off in developer-ready Figma files.</p>
                            <p className="mb-4">We start with stakeholder interviews and usability audits of your current product, then move into low-fidelity wireframes, validating flows with real users before investing in high-fidelity visuals. Every project ends with a component library that keeps your product consistent as it grows.</p>
                            <h3 className="mb-3 mt-5">What's included</h3>
                            <div className="row g-3 mb-4">
                                <div className="col-md-6">
                                    <div className="feature-grid-item">
                                        <div className="icon-box icon-box-primary"><i className="bi bi-search" /></div>
                                        <div><strong className="text-navy d-block mb-1">User Research</strong><span className="small">Interviews, surveys and usability testing.</span></div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="feature-grid-item">
                                        <div className="icon-box icon-box-secondary"><i className="bi bi-diagram-3" /></div>
                                        <div><strong className="text-navy d-block mb-1">Information Architecture</strong><span className="small">Sitemaps and user-flow diagrams.</span></div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="feature-grid-item">
                                        <div className="icon-box icon-box-success"><i className="bi bi-pencil-square" /></div>
                                        <div><strong className="text-navy d-block mb-1">Wireframing</strong><span className="small">Low-fidelity flows for rapid validation.</span></div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="feature-grid-item">
                                        <div className="icon-box icon-box-primary"><i className="bi bi-layers" /></div>
                                        <div><strong className="text-navy d-block mb-1">Design Systems</strong><span className="small">Reusable components, tokens and docs.</span></div>
                                    </div>
                                </div>
                            </div>
                            <h3 className="mb-3 mt-5">Our process</h3>
                            <div className="row g-4 mb-4">
                                <div className="col-md-6">
                                    <div className="process-step">
                                        <span className="process-number">01</span>
                                        <h4 className="card-title">Research &amp; Audit</h4>
                                        <p className="mb-0">We review analytics, run usability tests and interview your users to find friction points.</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="process-step">
                                        <span className="process-number">02</span>
                                        <h4 className="card-title">Wireframes</h4>
                                        <p className="mb-0">Structured low-fidelity flows reviewed with stakeholders before visual design starts.</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="process-step">
                                        <span className="process-number">03</span>
                                        <h4 className="card-title">Visual Design</h4>
                                        <p className="mb-0">High-fidelity screens built on a documented design system and component library.</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="process-step">
                                        <span className="process-number">04</span>
                                        <h4 className="card-title">Handoff &amp; Support</h4>
                                        <p className="mb-0">Developer-ready files, specs, and 30 days of post-handoff design support.</p>
                                    </div>
                                </div>
                            </div>
                            {/* FAQ */}
                            <h3 className="mb-3 mt-5">Common questions</h3>
                            <div className="accordion accordion-custom" id="serviceDetailFaq">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#sdfaq1">How long does a typical design project take?</button>
                                    </h2>
                                    <div id="sdfaq1" className="accordion-collapse collapse show" data-bs-parent="#serviceDetailFaq">
                                        <div className="accordion-body">A full redesign typically runs 6–10 weeks depending on scope, with weekly review checkpoints.</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sdfaq2">Do you provide developer handoff files?</button>
                                    </h2>
                                    <div id="sdfaq2" className="accordion-collapse collapse" data-bs-parent="#serviceDetailFaq">
                                        <div className="accordion-body">Yes — every project includes a structured Figma file with components, tokens and annotations ready for engineering.</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sdfaq3">Can you work with our existing brand guidelines?</button>
                                    </h2>
                                    <div id="sdfaq3" className="accordion-collapse collapse" data-bs-parent="#serviceDetailFaq">
                                        <div className="accordion-body">Absolutely. We'll extend your existing brand into a cohesive digital design system rather than starting from scratch.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* SIDEBAR */}
                        <div className="col-lg-4 reveal">
                            <div className="widget">
                                <h5>All Services</h5>
                                <ul className="widget-link-list">
                                    <li><a href="service-details.html" className="text-decoration-none text-navy">Product Strategy</a> <i className="bi bi-arrow-right text-primary-custom" /></li>
                                    <li><a href="service-details.html" className="text-decoration-none text-primary-custom fw-bold">UI/UX Design</a> <i className="bi bi-arrow-right text-primary-custom" /></li>
                                    <li><a href="service-details.html" className="text-decoration-none text-navy">Web Development</a> <i className="bi bi-arrow-right text-primary-custom" /></li>
                                    <li><a href="service-details.html" className="text-decoration-none text-navy">Cloud &amp; DevOps</a> <i className="bi bi-arrow-right text-primary-custom" /></li>
                                    <li><a href="service-details.html" className="text-decoration-none text-navy">Growth Marketing</a> <i className="bi bi-arrow-right text-primary-custom" /></li>
                                </ul>
                            </div>
                            <div className="widget bg-gradient-dark text-white border-0">
                                <div className="icon-box icon-box-white mb-3"><i className="bi bi-headset" /></div>
                                <h5 className="text-white">Need help scoping this?</h5>
                                <p className="text-white-50 small mb-3">Talk to a strategist — free, no obligation 30-minute call.</p>
                                <a href="contact.html" className="btn btn-primary w-100">Book a Call</a>
                            </div>
                            <div className="widget">
                                <h5>Pricing snapshot</h5>
                                <ul className="widget-link-list">
                                    <li>Design Sprint <span>$4,500</span></li>
                                    <li>Full Redesign <span>$18,000+</span></li>
                                    <li>Design Retainer <span>$6,000/mo</span></li>
                                </ul>
                                <a href="pricing.html" className="card-link-arrow mt-3 d-inline-flex">See all plans <i className="bi bi-arrow-right" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Pricing_details