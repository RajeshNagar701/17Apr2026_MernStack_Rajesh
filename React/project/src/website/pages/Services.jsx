import React from 'react'

function Services() {
    return (
        <div>
            {/* SERVICES GRID */}
            <section className="section">
                <div className="container">
                    <div className="row section-header justify-content-center text-center">
                        <div className="col-lg-7 reveal">
                            <span className="eyebrow">Full-stack capability</span>
                            <h2 className="section-title">Everything you need under one roof</h2>
                            <p className="section-subtitle mx-auto">Mix and match services to fit your stage — from a single design sprint to a fully managed product team.</p>
                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-4 reveal">
                            <div className="card-premium">
                                <div className="icon-box icon-box-lg icon-box-primary mb-4"><i className="bi bi-bar-chart-line" /></div>
                                <h3 className="card-title">Product Strategy</h3>
                                <p className="mb-3">User research, competitive analysis and roadmap planning that aligns your team around what matters most.</p>
                                <a href="service-details.html" className="card-link-arrow">Learn more <i className="bi bi-arrow-right" /></a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 reveal">
                            <div className="card-premium">
                                <div className="icon-box icon-box-lg icon-box-secondary mb-4"><i className="bi bi-palette" /></div>
                                <h3 className="card-title">UI/UX Design</h3>
                                <p className="mb-3">Wireframes, interactive prototypes and a documented design system your team can scale with.</p>
                                <a href="service-details.html" className="card-link-arrow">Learn more <i className="bi bi-arrow-right" /></a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 reveal">
                            <div className="card-premium">
                                <div className="icon-box icon-box-lg icon-box-success mb-4"><i className="bi bi-code-slash" /></div>
                                <h3 className="card-title">Web Development</h3>
                                <p className="mb-3">Production-grade front-end and back-end engineering using modern, maintainable frameworks.</p>
                                <a href="service-details.html" className="card-link-arrow">Learn more <i className="bi bi-arrow-right" /></a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 reveal">
                            <div className="card-premium">
                                <div className="icon-box icon-box-lg icon-box-primary mb-4"><i className="bi bi-cloud-arrow-up" /></div>
                                <h3 className="card-title">Cloud &amp; DevOps</h3>
                                <p className="mb-3">Infrastructure-as-code, CI/CD pipelines and observability so your platform scales reliably.</p>
                                <a href="service-details.html" className="card-link-arrow">Learn more <i className="bi bi-arrow-right" /></a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 reveal">
                            <div className="card-premium">
                                <div className="icon-box icon-box-lg icon-box-secondary mb-4"><i className="bi bi-megaphone" /></div>
                                <h3 className="card-title">Growth Marketing</h3>
                                <p className="mb-3">SEO, content and lifecycle campaigns engineered to lower CAC and increase retention.</p>
                                <a href="service-details.html" className="card-link-arrow">Learn more <i className="bi bi-arrow-right" /></a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 reveal">
                            <div className="card-premium">
                                <div className="icon-box icon-box-lg icon-box-success mb-4"><i className="bi bi-shield-check" /></div>
                                <h3 className="card-title">QA &amp; Security Audits</h3>
                                <p className="mb-3">Automated test suites, penetration testing and compliance reviews before you ship.</p>
                                <a href="service-details.html" className="card-link-arrow">Learn more <i className="bi bi-arrow-right" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* HOW WE ENGAGE */}
            <section className="section bg-soft">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 reveal">
                            <span className="eyebrow">Engagement models</span>
                            <h2 className="section-title">Flexible ways to work with us</h2>
                            <p className="section-subtitle mb-4">Whether you need a short sprint or an ongoing partner, we shape the engagement around your roadmap — not the other way around.</p>
                            <ul className="list-check">
                                <li><i className="bi bi-check" /><div><strong className="text-navy">Fixed-scope projects</strong> — defined deliverables, timeline and price.</div></li>
                                <li><i className="bi bi-check" /><div><strong className="text-navy">Monthly retainers</strong> — a dedicated pod working from your backlog.</div></li>
                                <li><i className="bi bi-check" /><div><strong className="text-navy">Staff augmentation</strong> — embed our specialists directly in your team.</div></li>
                            </ul>
                        </div>
                        <div className="col-lg-6 reveal">
                            <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=700&h=560&fit=crop" className="rounded-img w-100" alt="Team planning session on whiteboard" style={{ aspectRatio: '5/4', objectFit: 'cover' }} />
                        </div>
                    </div>
                </div>
            </section>
            {/* FAQ */}
            <section className="section">
                <div className="container">
                    <div className="row section-header justify-content-center text-center">
                        <div className="col-lg-7 reveal">
                            <span className="eyebrow">Questions</span>
                            <h2 className="section-title">Frequently asked questions</h2>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8 reveal">
                            <div className="accordion accordion-custom" id="servicesFaq">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">How quickly can we get started?</button>
                                    </h2>
                                    <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#servicesFaq">
                                        <div className="accordion-body">Most engagements kick off within 1–2 weeks of signing. For urgent projects, we can sometimes start sooner depending on team availability.</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">Do you work with early-stage startups?</button>
                                    </h2>
                                    <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#servicesFaq">
                                        <div className="accordion-body">Yes — about a third of our clients are pre-Series A. We offer scoped MVP packages designed for speed and budget sensitivity.</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">What tools and frameworks do you use?</button>
                                    </h2>
                                    <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#servicesFaq">
                                        <div className="accordion-body">It depends on your existing stack, but commonly React, Node.js, Next.js and AWS/GCP infrastructure, paired with Figma for design.</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">Can you take over an existing codebase?</button>
                                    </h2>
                                    <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#servicesFaq">
                                        <div className="accordion-body">Absolutely. We start every takeover with a technical audit so we understand the codebase before making changes.</div>
                                    </div>
                                </div>
                            </div>
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
                                <h2 className="mb-2">Not sure which service you need?</h2>
                                <p className="mb-0 fs-5">Book a free consultation and we'll help map out the right plan.</p>
                            </div>
                            <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
                                <a href="contact.html" className="btn btn-primary btn-lg-custom">Book a Call <i className="bi bi-arrow-right ms-1" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Services