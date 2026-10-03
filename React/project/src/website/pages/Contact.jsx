import React from 'react'

function Contact() {
    return (
        <div>
            <section className="section pb-0">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-md-4 reveal">
                            <div className="card-premium text-center">
                                <div className="icon-box icon-box-primary mx-auto mb-3"><i className="bi bi-geo-alt" /></div>
                                <h3 className="card-title">Visit Us</h3>
                                <p className="mb-0">148 Innovation Drive, Suite 400<br />San Francisco, CA 94107</p>
                            </div>
                        </div>
                        <div className="col-md-4 reveal">
                            <div className="card-premium text-center">
                                <div className="icon-box icon-box-secondary mx-auto mb-3"><i className="bi bi-envelope" /></div>
                                <h3 className="card-title">Email Us</h3>
                                <p className="mb-1">General inquiries:<br /><a href="mailto:hello@nexora.com" className="text-primary-custom fw-semibold text-decoration-none">hello@nexora.com</a></p>
                            </div>
                        </div>
                        <div className="col-md-4 reveal">
                            <div className="card-premium text-center">
                                <div className="icon-box icon-box-success mx-auto mb-3"><i className="bi bi-telephone" /></div>
                                <h3 className="card-title">Call Us</h3>
                                <p className="mb-0">Mon – Fri, 9am – 6pm PST<br /><a href="tel:+14155550182" className="text-primary-custom fw-semibold text-decoration-none">+1 (415) 555-0182</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="row g-5 align-items-stretch">
                        <div className="col-lg-7 reveal">
                            <span className="eyebrow">Send a message</span>
                            <h2 className="section-title mb-4">Tell us about your project</h2>
                            <form className="needs-validation" noValidate>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <label className="form-label" htmlFor="fullName">Full Name</label>
                                        <input type="text" className="form-control" id="fullName" required />
                                        <div className="invalid-feedback">Please enter your name.</div>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label" htmlFor="workEmail">Work Email</label>
                                        <input type="email" className="form-control" id="workEmail" required />
                                        <div className="invalid-feedback">Please enter a valid email address.</div>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label" htmlFor="companyName">Company</label>
                                        <input type="text" className="form-control" id="companyName" />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label" htmlFor="budget">Estimated Budget</label>
                                        <select className="form-select" id="budget" required>
                                            <option value selected disabled>Select a range</option>
                                            <option>Under $5,000</option>
                                            <option>$5,000 – $15,000</option>
                                            <option>$15,000 – $50,000</option>
                                            <option>$50,000+</option>
                                        </select>
                                        <div className="invalid-feedback">Please select a budget range.</div>
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label" htmlFor="service">Service Needed</label>
                                        <select className="form-select" id="service" required>
                                            <option value selected disabled>Select a service</option>
                                            <option>Product Strategy</option>
                                            <option>UI/UX Design</option>
                                            <option>Web Development</option>
                                            <option>Cloud &amp; DevOps</option>
                                            <option>Growth Marketing</option>
                                            <option>Something else</option>
                                        </select>
                                        <div className="invalid-feedback">Please select a service.</div>
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label" htmlFor="message">Project Details</label>
                                        <textarea className="form-control" id="message" rows={5} placeholder="Tell us a bit about your goals, timeline, and anything else we should know." required defaultValue={""} />
                                        <div className="invalid-feedback">Please share a few details about your project.</div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="agreeTerms" required />
                                            <label className="form-check-label small text-slate" htmlFor="agreeTerms">
                                                I agree to the <a href="#" className="text-primary-custom">Privacy Policy</a> and consent to being contacted about my inquiry.
                                            </label>
                                            <div className="invalid-feedback">You must agree before submitting.</div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="btn btn-primary btn-lg-custom">Send Message <i className="bi bi-send ms-1" /></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-5 reveal">
                            <div className="map-frame mb-4">
                                <iframe src="https://www.google.com/maps?q=San+Francisco&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Nexora office location map" />
                            </div>
                            <div className="widget bg-gradient-dark text-white border-0">
                                <div className="icon-box icon-box-white mb-3"><i className="bi bi-clock" /></div>
                                <h5 className="text-white mb-3">Office Hours</h5>
                                <ul className="widget-link-list" style={{ border: 'rgba(255,255,255,0.1)' }}>
                                    <li style={{ borderColor: 'rgba(255,255,255,0.1)', color: '#fff' }}>Monday – Friday <span style={{ color: 'rgba(255,255,255,0.6)' }}>9:00 AM – 6:00 PM</span></li>
                                    <li style={{ borderColor: 'rgba(255,255,255,0.1)', color: '#fff' }}>Saturday <span style={{ color: 'rgba(255,255,255,0.6)' }}>10:00 AM – 2:00 PM</span></li>
                                    <li style={{ borderColor: 'rgba(255,255,255,0.1)', color: '#fff' }}>Sunday <span style={{ color: 'rgba(255,255,255,0.6)' }}>Closed</span></li>
                                </ul>
                                <p className="text-white-50 small mt-3 mb-0">All times Pacific Standard Time (PST).</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            {/* FAQ */}
            < section className="section bg-soft" >
                <div className="container">
                    <div className="row section-header justify-content-center text-center">
                        <div className="col-lg-7 reveal">
                            <span className="eyebrow">Before you reach out</span>
                            <h2 className="section-title">Quick answers</h2>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8 reveal">
                            <div className="accordion accordion-custom" id="contactFaq">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#cfaq1">How soon will I hear back?</button>
                                    </h2>
                                    <div id="cfaq1" className="accordion-collapse collapse show" data-bs-parent="#contactFaq">
                                        <div className="accordion-body">We respond to all inquiries within one business day, usually much sooner.</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#cfaq2">Do I need a fully scoped brief?</button>
                                    </h2>
                                    <div id="cfaq2" className="accordion-collapse collapse" data-bs-parent="#contactFaq">
                                        <div className="accordion-body">Not at all — a rough idea is enough to start. We'll help you scope the rest during a free discovery call.</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#cfaq3">Can we sign an NDA before discussing details?</button>
                                    </h2>
                                    <div id="cfaq3" className="accordion-collapse collapse" data-bs-parent="#contactFaq">
                                        <div className="accordion-body">Yes, we're happy to sign your NDA — just mention it in your message and we'll send it over before our first call.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >

    )
}

export default Contact