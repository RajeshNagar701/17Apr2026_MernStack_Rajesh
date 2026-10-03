import React from 'react'

function Blog() {
    return (
        <div>
            <section className="section">
                <div className="container">
                    <div className="row g-5">
                        {/* BLOG LIST */}
                        <div className="col-lg-8">
                            {/* Featured post */}
                            <a href="blog-details.html" className="text-decoration-none reveal d-block mb-4">
                                <div className="card-premium p-0 overflow-hidden">
                                    <div className="row g-0">
                                        <div className="col-md-6">
                                            <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=450&fit=crop" className="w-100 h-100" style={{ objectFit: 'cover', minHeight: 260 }} alt="Team discussing product roadmap" />
                                        </div>
                                        <div className="col-md-6 d-flex flex-column justify-content-center p-4">
                                            <span className="tag-pill">Product Strategy</span>
                                            <h3 className="mb-2">How to Build a Product Roadmap That Survives Contact With Reality</h3>
                                            <p className="mb-3">Most roadmaps fall apart within a quarter. Here's the framework we use to keep ours adaptable without losing direction.</p>
                                            <div className="d-flex align-items-center gap-2 text-slate-light small">
                                                <img src="https://i.pravatar.cc/32?img=8" className="rounded-circle" style={{ width: 28, height: 28 }} alt="Daniel Hwang" />
                                                <span>Daniel Hwang</span> · <span>June 2, 2026</span> · <span>7 min read</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <div className="row g-4">
                                <div className="col-md-6 reveal">
                                    <a href="blog-details.html" className="text-decoration-none">
                                        <div className="card-premium p-0 overflow-hidden">
                                            <div className="blog-card-img">
                                                <img src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=500&h=320&fit=crop" alt="Design system component library" />
                                            </div>
                                            <div className="blog-card-body pb-4">
                                                <span className="tag-pill">Design</span>
                                                <h3 className="card-title">Why Your Design System Keeps Falling Apart</h3>
                                                <p className="small mb-0">Three common reasons design systems decay — and how to structure yours to last.</p>
                                                <div className="meta-row">
                                                    <span><i className="bi bi-person me-1" />Priya Nair</span>
                                                    <span><i className="bi bi-clock me-1" />5 min</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-6 reveal">
                                    <a href="blog-details.html" className="text-decoration-none">
                                        <div className="card-premium p-0 overflow-hidden">
                                            <div className="blog-card-img">
                                                <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=320&fit=crop" alt="Cloud infrastructure servers" />
                                            </div>
                                            <div className="blog-card-body pb-4">
                                                <span className="tag-pill">Engineering</span>
                                                <h3 className="card-title">A Practical Guide to Cutting Cloud Costs by 40%</h3>
                                                <p className="small mb-0">The audit checklist we run on every client infrastructure review.</p>
                                                <div className="meta-row">
                                                    <span><i className="bi bi-person me-1" />Marcus Lee</span>
                                                    <span><i className="bi bi-clock me-1" />9 min</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-6 reveal">
                                    <a href="blog-details.html" className="text-decoration-none">
                                        <div className="card-premium p-0 overflow-hidden">
                                            <div className="blog-card-img">
                                                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=320&fit=crop" alt="Analytics charts on laptop" />
                                            </div>
                                            <div className="blog-card-body pb-4">
                                                <span className="tag-pill">Growth</span>
                                                <h3 className="card-title">The Onboarding Metrics That Actually Predict Churn</h3>
                                                <p className="small mb-0">Forget vanity metrics — these are the signals worth tracking from day one.</p>
                                                <div className="meta-row">
                                                    <span><i className="bi bi-person me-1" />Anna Kowalski</span>
                                                    <span><i className="bi bi-clock me-1" />6 min</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-6 reveal">
                                    <a href="blog-details.html" className="text-decoration-none">
                                        <div className="card-premium p-0 overflow-hidden">
                                            <div className="blog-card-img">
                                                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=320&fit=crop" alt="Developer writing code" />
                                            </div>
                                            <div className="blog-card-body pb-4">
                                                <span className="tag-pill">Engineering</span>
                                                <h3 className="card-title">Migrating a Legacy App Without Breaking Production</h3>
                                                <p className="small mb-0">Our phased-migration playbook, tested across a dozen client codebases.</p>
                                                <div className="meta-row">
                                                    <span><i className="bi bi-person me-1" />Marcus Lee</span>
                                                    <span><i className="bi bi-clock me-1" />8 min</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-6 reveal">
                                    <a href="blog-details.html" className="text-decoration-none">
                                        <div className="card-premium p-0 overflow-hidden">
                                            <div className="blog-card-img">
                                                <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&h=320&fit=crop" alt="Team brainstorming with sticky notes" />
                                            </div>
                                            <div className="blog-card-body pb-4">
                                                <span className="tag-pill">Strategy</span>
                                                <h3 className="card-title">Running Discovery Sprints Remotely: A Step-by-Step Guide</h3>
                                                <p className="small mb-0">How we replicate in-person workshop energy across timezones.</p>
                                                <div className="meta-row">
                                                    <span><i className="bi bi-person me-1" />Daniel Hwang</span>
                                                    <span><i className="bi bi-clock me-1" />10 min</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-6 reveal">
                                    <a href="blog-details.html" className="text-decoration-none">
                                        <div className="card-premium p-0 overflow-hidden">
                                            <div className="blog-card-img">
                                                <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=320&fit=crop" alt="Mobile app prototypes on table" />
                                            </div>
                                            <div className="blog-card-body pb-4">
                                                <span className="tag-pill">Design</span>
                                                <h3 className="card-title">Accessibility Isn't Optional: A Practical Audit Checklist</h3>
                                                <p className="small mb-0">A 20-point checklist we apply before every product handoff.</p>
                                                <div className="meta-row">
                                                    <span><i className="bi bi-person me-1" />Priya Nair</span>
                                                    <span><i className="bi bi-clock me-1" />6 min</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            {/* Pagination */}
                            <nav className="mt-5 reveal" aria-label="Blog pagination">
                                <ul className="pagination justify-content-center gap-2">
                                    <li className="page-item"><a className="page-link rounded-3 border-0 bg-soft text-navy" href="#"><i className="bi bi-arrow-left" /></a></li>
                                    <li className="page-item"><a className="page-link rounded-3 border-0 btn-primary text-white" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link rounded-3 border-0 bg-soft text-navy" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link rounded-3 border-0 bg-soft text-navy" href="#">3</a></li>
                                    <li className="page-item"><a className="page-link rounded-3 border-0 bg-soft text-navy" href="#"><i className="bi bi-arrow-right" /></a></li>
                                </ul>
                            </nav>
                        </div>
                        {/* SIDEBAR */}
                        <div className="col-lg-4">
                            <div className="widget reveal">
                                <h5>Search</h5>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Search articles..." />
                                    <button className="btn btn-primary"><i className="bi bi-search" /></button>
                                </div>
                            </div>
                            <div className="widget reveal">
                                <h5>Categories</h5>
                                <ul className="widget-link-list">
                                    <li>Product Strategy <span>12</span></li>
                                    <li>Design <span>18</span></li>
                                    <li>Engineering <span>24</span></li>
                                    <li>Growth <span>9</span></li>
                                    <li>Company News <span>5</span></li>
                                </ul>
                            </div>
                            <div className="widget reveal">
                                <h5>Popular Tags</h5>
                                <div className="d-flex flex-wrap gap-2">
                                    <span className="badge-soft">UX Research</span>
                                    <span className="badge-soft">Figma</span>
                                    <span className="badge-soft">React</span>
                                    <span className="badge-soft">SaaS</span>
                                    <span className="badge-soft">DevOps</span>
                                    <span className="badge-soft">Branding</span>
                                    <span className="badge-soft">Onboarding</span>
                                </div>
                            </div>
                            <div className="widget bg-gradient-dark text-white border-0 reveal">
                                <div className="icon-box icon-box-white mb-3"><i className="bi bi-envelope-paper" /></div>
                                <h5 className="text-white">Subscribe to our newsletter</h5>
                                <p className="text-white-50 small mb-3">One email a month — practical insights, no fluff.</p>
                                <form className="needs-validation" noValidate>
                                    <input type="email" className="form-control mb-2" placeholder="Your email" required style={{ background: 'rgba(255,255,255,0.06)', borderColor: 'rgba(255,255,255,0.12)', color: '#fff' }} />
                                    <button className="btn btn-primary w-100" type="submit">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Blog