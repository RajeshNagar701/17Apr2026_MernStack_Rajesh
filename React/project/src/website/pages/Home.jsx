import React from 'react'
import { Helmet } from 'react-helmet'


function Home() {
    return (
        <div>
            {/* LOGO CLOUD */}
            <section className="py-4 bg-white border-bottom">
                <div className="container">
                    <p className="text-center text-slate small fw-semibold text-uppercase mb-4" style={{ letterSpacing: '0.1em' }}>Powering product teams at</p>
                    <div className="row align-items-center justify-content-center g-4">
                        <div className="col-4 col-md-2"><div className="logo-cloud-item"><i className="bi bi-hexagon-fill me-1" />Flowbit</div></div>
                        <div className="col-4 col-md-2"><div className="logo-cloud-item"><i className="bi bi-circle-fill me-1" />Orbiq</div></div>
                        <div className="col-4 col-md-2"><div className="logo-cloud-item"><i className="bi bi-triangle-fill me-1" />Verta</div></div>
                        <div className="col-4 col-md-2"><div className="logo-cloud-item"><i className="bi bi-square-fill me-1" />Cloudra</div></div>
                        <div className="col-4 col-md-2"><div className="logo-cloud-item"><i className="bi bi-gem me-1" />Pivotal</div></div>
                        <div className="col-4 col-md-2"><div className="logo-cloud-item"><i className="bi bi-diamond-fill me-1" />Northpeak</div></div>
                    </div>
                </div>
            </section>
            {/* SERVICES OVERVIEW */}
            <section className="section bg-soft">
                <div className="container">
                    <div className="row section-header align-items-end">
                        <div className="col-lg-7 reveal">
                            <span className="eyebrow">What we do</span>
                            <h2 className="section-title">Capabilities built for modern product teams</h2>
                            <p className="section-subtitle">From early-stage validation to scaling infrastructure, our specialists plug directly into your roadmap.</p>
                        </div>
                        <div className="col-lg-5 text-lg-end mt-3 mt-lg-0 reveal">
                            <a href="services.html" className="card-link-arrow">View all services <i className="bi bi-arrow-right" /></a>
                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-3 reveal">
                            <div className="card-premium">
                                <div className="icon-box icon-box-primary mb-4"><i className="bi bi-bar-chart-line" /></div>
                                <h3 className="card-title">Product Strategy</h3>
                                <p className="mb-3">Research-driven roadmaps that align stakeholders and de-risk what you build next.</p>
                                <a href="service-details.html" className="card-link-arrow">Learn more <i className="bi bi-arrow-right" /></a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 reveal">
                            <div className="card-premium">
                                <div className="icon-box icon-box-secondary mb-4"><i className="bi bi-palette" /></div>
                                <h3 className="card-title">UI/UX Design</h3>
                                <p className="mb-3">Interfaces that convert — wireframes, design systems and prototypes ready for dev.</p>
                                <a href="service-details.html" className="card-link-arrow">Learn more <i className="bi bi-arrow-right" /></a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 reveal">
                            <div className="card-premium">
                                <div className="icon-box icon-box-success mb-4"><i className="bi bi-code-slash" /></div>
                                <h3 className="card-title">Web Development</h3>
                                <p className="mb-3">Performant, scalable web apps built on modern frameworks with clean architecture.</p>
                                <a href="service-details.html" className="card-link-arrow">Learn more <i className="bi bi-arrow-right" /></a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 reveal">
                            <div className="card-premium">
                                <div className="icon-box icon-box-primary mb-4"><i className="bi bi-cloud-arrow-up" /></div>
                                <h3 className="card-title">Cloud &amp; DevOps</h3>
                                <p className="mb-3">CI/CD pipelines, monitoring and cloud infrastructure that scales with your traffic.</p>
                                <a href="service-details.html" className="card-link-arrow">Learn more <i className="bi bi-arrow-right" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ABOUT / WHY US */}
            <section className="section">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 reveal">
                            <div className="position-relative">
                                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&h=560&fit=crop" className="rounded-img w-100" alt="Nexora team collaborating in office" style={{ aspectRatio: '5/4', objectFit: 'cover' }} />
                                <div className="hero-float-badge badge-2 d-none d-sm-flex" style={{ position: 'absolute', bottom: '-1.5rem', left: '-1.5rem', right: 'auto' }}>
                                    <div className="icon-box icon-box-primary" style={{ width: 36, height: 36, borderRadius: 10, fontSize: '1.1rem' }}><i className="bi bi-award" /></div>
                                    <div>Top Rated Agency<br /><small className="text-slate fw-normal">Clutch &amp; G2, 2025</small></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 reveal">
                            <span className="eyebrow">Why Nexora</span>
                            <h2 className="section-title">A senior team, embedded in your workflow</h2>
                            <p className="section-subtitle mb-4">We don't hand off decks and disappear. Our designers and engineers work inside your tools — Slack, Linear, Figma — as an extension of your team.</p>
                            <ul className="list-check mb-4">
                                <li><i className="bi bi-check" /><div><strong className="text-navy">Dedicated senior squad</strong> — no junior bait-and-switch, ever.</div></li>
                                <li><i className="bi bi-check" /><div><strong className="text-navy">Transparent weekly sprints</strong> with shared dashboards and demos.</div></li>
                                <li><i className="bi bi-check" /><div><strong className="text-navy">Flexible engagement models</strong> — project, retainer or staff augmentation.</div></li>
                            </ul>
                            <a href="about.html" className="btn btn-primary btn-lg-custom">More About Us</a>
                        </div>
                    </div>
                </div>
            </section>
            {/* STATS STRIP */}
            <section className="stats-strip py-5 bg-white">
                <div className="container">
                    <div className="row text-center g-4">
                        <div className="col-6 col-md-3 stat-item reveal">
                            <div className="stat-number">480+</div>
                            <div className="stat-label">Projects delivered</div>
                        </div>
                        <div className="col-6 col-md-3 stat-item reveal">
                            <div className="stat-number">12 yrs</div>
                            <div className="stat-label">Industry experience</div>
                        </div>
                        <div className="col-6 col-md-3 stat-item reveal">
                            <div className="stat-number">96%</div>
                            <div className="stat-label">Client retention</div>
                        </div>
                        <div className="col-6 col-md-3 stat-item reveal">
                            <div className="stat-number">34</div>
                            <div className="stat-label">Countries served</div>
                        </div>
                    </div>
                </div>
            </section>
            {/* PROCESS */}
            <section className="section bg-soft">
                <div className="container">
                    <div className="row section-header justify-content-center text-center">
                        <div className="col-lg-7 reveal">
                            <span className="eyebrow">How we work</span>
                            <h2 className="section-title">A proven four-step delivery process</h2>
                            <p className="section-subtitle mx-auto">Every engagement follows the same disciplined process — refined across hundreds of launches.</p>
                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-3 reveal">
                            <div className="process-step">
                                <span className="process-number">01</span>
                                <h3 className="card-title">Discover</h3>
                                <p>We audit your product, market and users to identify the highest-leverage opportunities.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 reveal">
                            <div className="process-step">
                                <span className="process-number">02</span>
                                <h3 className="card-title">Design</h3>
                                <p>Wireframes evolve into polished, tested interfaces backed by a reusable design system.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 reveal">
                            <div className="process-step">
                                <span className="process-number">03</span>
                                <h3 className="card-title">Build</h3>
                                <p>Engineers ship in two-week sprints with continuous integration and staging previews.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 reveal">
                            <div className="process-step">
                                <span className="process-number">04</span>
                                <h3 className="card-title">Scale</h3>
                                <p>Post-launch, we monitor performance and iterate based on real usage data.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* PORTFOLIO PREVIEW */}
            <section className="section">
                <div className="container">
                    <div className="row section-header align-items-end">
                        <div className="col-lg-7 reveal">
                            <span className="eyebrow">Selected work</span>
                            <h2 className="section-title">Case studies that speak for themselves</h2>
                        </div>
                        <div className="col-lg-5 text-lg-end mt-3 mt-lg-0 reveal">
                            <a href="portfolio.html" className="card-link-arrow">View full portfolio <i className="bi bi-arrow-right" /></a>
                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-4 reveal">
                            <a href="portfolio-single.html" className="portfolio-card d-block">
                                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=450&fit=crop" alt="Fintech dashboard redesign project" />
                                <div className="portfolio-overlay">
                                    <span>FinTech · Product Design</span>
                                    <h5>Payflow Dashboard Redesign</h5>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-6 col-lg-4 reveal">
                            <a href="portfolio-single.html" className="portfolio-card d-block">
                                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=450&fit=crop" alt="SaaS analytics platform development" />
                                <div className="portfolio-overlay">
                                    <span>SaaS · Web Development</span>
                                    <h5>Metricly Analytics Platform</h5>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-6 col-lg-4 reveal">
                            <a href="portfolio-single.html" className="portfolio-card d-block">
                                <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=450&fit=crop" alt="Healthcare app branding and UI" />
                                <div className="portfolio-overlay">
                                    <span>HealthTech · Branding</span>
                                    <h5>Carewise Patient App</h5>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* TESTIMONIALS */}
            <section className="section bg-soft">
                <div className="container">
                    <div className="row section-header justify-content-center text-center">
                        <div className="col-lg-7 reveal">
                            <span className="eyebrow">Client feedback</span>
                            <h2 className="section-title">Don't just take our word for it</h2>
                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-4 reveal">
                            <div className="testimonial-card">
                                <div className="stars">★★★★★</div>
                                <p>"Nexora rebuilt our onboarding flow in six weeks and activation rates jumped almost immediately. Communication was exceptional throughout."</p>
                                <div className="testimonial-author">
                                    <img src="https://i.pravatar.cc/100?img=33" alt="Sarah Mitchell" />
                                    <div>
                                        <div className="name">Sarah Mitchell</div>
                                        <div className="role">VP Product, Flowbit</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 reveal">
                            <div className="testimonial-card">
                                <div className="stars">★★★★★</div>
                                <p>"The team felt like an extension of ours from day one. They caught edge cases our internal team had missed for months."</p>
                                <div className="testimonial-author">
                                    <img src="https://i.pravatar.cc/100?img=51" alt="James Okafor" />
                                    <div>
                                        <div className="name">James Okafor</div>
                                        <div className="role">CTO, Orbiq</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 reveal">
                            <div className="testimonial-card">
                                <div className="stars">★★★★★</div>
                                <p>"Clear timelines, transparent pricing, and a final product that exceeded what we scoped. We've since signed a long-term retainer."</p>
                                <div className="testimonial-author">
                                    <img src="https://i.pravatar.cc/100?img=14" alt="Lina Torres" />
                                    <div>
                                        <div className="name">Lina Torres</div>
                                        <div className="role">Founder, Carewise</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* CTA */}
            <section className="section">
                <div className="container">
                    <div className="cta-section reveal">
                        <div className="row align-items-center">
                            <div className="col-lg-8">
                                <h2 className="mb-2">Ready to build something great?</h2>
                                <p className="mb-0 fs-5">Book a free 30-minute strategy call — no pressure, no sales script.</p>
                            </div>
                            <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
                                <a href="contact.html" className="btn btn-primary btn-lg-custom">Book a Call <i className="bi bi-arrow-right ms-1" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Helmet>
                
            </Helmet>
        </div>

    )
}

export default Home