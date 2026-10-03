import React from 'react'

function Pricing() {
    return (
        <div>
            {/* TOGGLE */}
            <section className="section pb-0">
                <div className="container">
                    <div className="row section-header justify-content-center text-center">
                        <div className="col-lg-7 reveal">
                            <span className="eyebrow">Retainer plans</span>
                            <h2 className="section-title">Choose the plan that fits your stage</h2>
                            <p className="section-subtitle mx-auto">All plans include a dedicated project lead, weekly demos and a shared Slack channel. Cancel or switch plans anytime.</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center gap-3 mb-5 reveal">
                        <span className="fw-semibold text-navy" id="monthlyLabel">Monthly</span>
                        <div className="form-check form-switch m-0">
                            <input className="form-check-input" type="checkbox" role="switch" id="billingToggle" style={{ width: '3em', height: '1.5em', cursor: 'pointer' }} />
                        </div>
                        <span className="fw-semibold text-slate" id="yearlyLabel">Yearly <span className="badge-soft">Save 15%</span></span>
                    </div>
                </div>
            </section>
            {/* PRICING CARDS */}
            <section className="section pt-0">
                <div className="container">
                    <div className="row g-4 align-items-stretch">
                        <div className="col-lg-4 reveal">
                            <div className="pricing-card">
                                <h3 className="mb-1">Starter</h3>
                                <p className="text-slate small mb-3">For early-stage teams validating an MVP.</p>
                                <div className="price-wrap">
                                    <span className="price" data-monthly={4500} data-yearly={3825}>$4,500</span>
                                    <span className="price-period">/mo</span>
                                </div>
                                <hr className="pricing-divider" />
                                <ul className="feature-list">
                                    <li><i className="bi bi-check-circle-fill" /> 1 dedicated designer</li>
                                    <li><i className="bi bi-check-circle-fill" /> Up to 40 hours/month</li>
                                    <li><i className="bi bi-check-circle-fill" /> Weekly progress demos</li>
                                    <li><i className="bi bi-check-circle-fill" /> Shared Slack channel</li>
                                    <li className="disabled"><i className="bi bi-x-circle" /> Dedicated engineer</li>
                                    <li className="disabled"><i className="bi bi-x-circle" /> Priority support</li>
                                </ul>
                                <a href="contact.html" className="btn btn-light-custom w-100 mt-4">Get Started</a>
                            </div>
                        </div>
                        <div className="col-lg-4 reveal">
                            <div className="pricing-card featured">
                                <span className="pricing-badge">Most Popular</span>
                                <h3 className="mb-1">Growth</h3>
                                <p className="text-slate small mb-3">For scaling teams shipping every sprint.</p>
                                <div className="price-wrap">
                                    <span className="price" data-monthly={9500} data-yearly={8075}>$9,500</span>
                                    <span className="price-period">/mo</span>
                                </div>
                                <hr className="pricing-divider" />
                                <ul className="feature-list">
                                    <li><i className="bi bi-check-circle-fill" /> 1 designer + 1 engineer</li>
                                    <li><i className="bi bi-check-circle-fill" /> Up to 100 hours/month</li>
                                    <li><i className="bi bi-check-circle-fill" /> Twice-weekly demos</li>
                                    <li><i className="bi bi-check-circle-fill" /> Shared Slack channel</li>
                                    <li><i className="bi bi-check-circle-fill" /> Priority support (24h)</li>
                                    <li className="disabled"><i className="bi bi-x-circle" /> Dedicated QA engineer</li>
                                </ul>
                                <a href="contact.html" className="btn btn-primary w-100 mt-4">Get Started</a>
                            </div>
                        </div>
                        <div className="col-lg-4 reveal">
                            <div className="pricing-card">
                                <h3 className="mb-1">Enterprise</h3>
                                <p className="text-slate small mb-3">For complex, multi-team product organizations.</p>
                                <div className="price-wrap">
                                    <span className="price">Custom</span>
                                </div>
                                <hr className="pricing-divider" />
                                <ul className="feature-list">
                                    <li><i className="bi bi-check-circle-fill" /> Full pod (design + dev + QA)</li>
                                    <li><i className="bi bi-check-circle-fill" /> Unlimited hours</li>
                                    <li><i className="bi bi-check-circle-fill" /> Daily standups</li>
                                    <li><i className="bi bi-check-circle-fill" /> Dedicated account manager</li>
                                    <li><i className="bi bi-check-circle-fill" /> Priority support (4h)</li>
                                    <li><i className="bi bi-check-circle-fill" /> Custom SLAs &amp; contracts</li>
                                </ul>
                                <a href="contact.html" className="btn btn-light-custom w-100 mt-4">Contact Sales</a>
                            </div>
                        </div>
                    </div>
                    <p className="text-center text-slate small mt-4 reveal">All plans include a 14-day satisfaction guarantee. Need a one-off project instead? <a href="contact.html" className="text-primary-custom fw-semibold">Get a custom quote →</a></p>
                </div>
            </section>
            {/* COMPARISON TABLE */}
            <section className="section bg-soft">
                <div className="container">
                    <div className="row section-header justify-content-center text-center">
                        <div className="col-lg-7 reveal">
                            <span className="eyebrow">Compare plans</span>
                            <h2 className="section-title">Full feature breakdown</h2>
                        </div>
                    </div>
                    <div className="table-responsive reveal">
                        <table className="table align-middle bg-white rounded-4 overflow-hidden" style={{ boxShadow: 'var(--n-shadow-sm)' }}>
                            <thead>
                                <tr className="text-center">
                                    <th className="text-start ps-4 py-3" style={{ fontFamily: 'var(--n-font-display)', color: 'var(--n-navy)' }}>Feature</th>
                                    <th className="py-3" style={{ fontFamily: 'var(--n-font-display)', color: 'var(--n-navy)' }}>Starter</th>
                                    <th className="py-3 text-primary-custom" style={{ fontFamily: 'var(--n-font-display)' }}>Growth</th>
                                    <th className="py-3 pe-4" style={{ fontFamily: 'var(--n-font-display)', color: 'var(--n-navy)' }}>Enterprise</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="text-center">
                                    <td className="text-start ps-4">Dedicated designer</td>
                                    <td><i className="bi bi-check-lg text-success" /></td>
                                    <td><i className="bi bi-check-lg text-success" /></td>
                                    <td><i className="bi bi-check-lg text-success" /></td>
                                </tr>
                                <tr className="text-center">
                                    <td className="text-start ps-4">Dedicated engineer</td>
                                    <td><i className="bi bi-dash text-slate-light" /></td>
                                    <td><i className="bi bi-check-lg text-success" /></td>
                                    <td><i className="bi bi-check-lg text-success" /></td>
                                </tr>
                                <tr className="text-center">
                                    <td className="text-start ps-4">QA engineer</td>
                                    <td><i className="bi bi-dash text-slate-light" /></td>
                                    <td><i className="bi bi-dash text-slate-light" /></td>
                                    <td><i className="bi bi-check-lg text-success" /></td>
                                </tr>
                                <tr className="text-center">
                                    <td className="text-start ps-4">Monthly hours</td>
                                    <td>40</td>
                                    <td>100</td>
                                    <td>Unlimited</td>
                                </tr>
                                <tr className="text-center">
                                    <td className="text-start ps-4">Progress demos</td>
                                    <td>Weekly</td>
                                    <td>Twice weekly</td>
                                    <td>Daily</td>
                                </tr>
                                <tr className="text-center">
                                    <td className="text-start ps-4 pb-4">Support response time</td>
                                    <td className="pb-4">48h</td>
                                    <td className="pb-4">24h</td>
                                    <td className="pb-4 pe-4">4h</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            {/* FAQ */}
            <section className="section">
                <div className="container">
                    <div className="row section-header justify-content-center text-center">
                        <div className="col-lg-7 reveal">
                            <span className="eyebrow">Billing questions</span>
                            <h2 className="section-title">Pricing FAQs</h2>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8 reveal">
                            <div className="accordion accordion-custom" id="pricingFaq">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#pfaq1">Can I change plans later?</button>
                                    </h2>
                                    <div id="pfaq1" className="accordion-collapse collapse show" data-bs-parent="#pricingFaq">
                                        <div className="accordion-body">Yes, you can upgrade, downgrade or pause your plan at the start of any billing cycle with no penalty.</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#pfaq2">What happens if I don't use all my hours?</button>
                                    </h2>
                                    <div id="pfaq2" className="accordion-collapse collapse" data-bs-parent="#pricingFaq">
                                        <div className="accordion-body">Unused hours roll over to the following month, up to a maximum of 20% of your monthly allocation.</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#pfaq3">Do you offer one-time project pricing?</button>
                                    </h2>
                                    <div id="pfaq3" className="accordion-collapse collapse" data-bs-parent="#pricingFaq">
                                        <div className="accordion-body">Yes — for clearly scoped projects we can provide a fixed quote. Reach out via the contact page for a custom estimate.</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#pfaq4">Is there a minimum contract length?</button>
                                    </h2>
                                    <div id="pfaq4" className="accordion-collapse collapse" data-bs-parent="#pricingFaq">
                                        <div className="accordion-body">Retainer plans run month-to-month with no long-term lock-in. Enterprise plans may include custom terms.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Pricing