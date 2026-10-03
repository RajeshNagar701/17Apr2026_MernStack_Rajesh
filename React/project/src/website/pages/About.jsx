import React from 'react'

function About() {
  return (
   <div>
  {/* STORY */}
  <section className="section">
    <div className="container">
      <div className="row align-items-center g-5">
        <div className="col-lg-6 reveal">
          <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&h=560&fit=crop" className="rounded-img w-100" alt="Nexora studio workspace" style={{aspectRatio: '5/4', objectFit: 'cover'}} />
        </div>
        <div className="col-lg-6 reveal">
          <span className="eyebrow">Our story</span>
          <h2 className="section-title">Founded by operators, built for operators</h2>
          <p className="section-subtitle mb-3">Nexora started in 2014 when three product leads, frustrated with slow agency turnaround, decided to build the studio they wished they could hire. Over a decade later, we've shipped products for fintech, healthtech and B2B SaaS companies across 34 countries.</p>
          <p className="mb-4">Today our team of 42 designers, engineers and strategists works in small, senior pods — each dedicated to two or three clients at a time so quality never slips.</p>
          <div className="row g-3">
            <div className="col-6">
              <div className="d-flex align-items-center gap-3">
                <div className="icon-box icon-box-primary"><i className="bi bi-calendar-check" /></div>
                <div><strong className="text-navy d-block">Since 2014</strong><small className="text-slate">12 years operating</small></div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex align-items-center gap-3">
                <div className="icon-box icon-box-success"><i className="bi bi-globe" /></div>
                <div><strong className="text-navy d-block">Remote-first</strong><small className="text-slate">Across 9 timezones</small></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* MISSION / VALUES */}
  <section className="section bg-soft">
    <div className="container">
      <div className="row section-header justify-content-center text-center">
        <div className="col-lg-7 reveal">
          <span className="eyebrow">What drives us</span>
          <h2 className="section-title">The principles behind every engagement</h2>
        </div>
      </div>
      <div className="row g-4">
        <div className="col-md-6 col-lg-3 reveal">
          <div className="card-premium text-center">
            <div className="icon-box icon-box-primary mx-auto mb-3"><i className="bi bi-bullseye" /></div>
            <h3 className="card-title">Outcomes over output</h3>
            <p>We measure success in business impact, not hours logged or pages shipped.</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 reveal">
          <div className="card-premium text-center">
            <div className="icon-box icon-box-secondary mx-auto mb-3"><i className="bi bi-chat-square-text" /></div>
            <h3 className="card-title">Radical transparency</h3>
            <p>Shared boards, honest timelines, and direct access to the people doing the work.</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 reveal">
          <div className="card-premium text-center">
            <div className="icon-box icon-box-success mx-auto mb-3"><i className="bi bi-gem" /></div>
            <h3 className="card-title">Craft as a default</h3>
            <p>Every detail — copy, spacing, micro-interaction — is treated as part of the product.</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 reveal">
          <div className="card-premium text-center">
            <div className="icon-box icon-box-primary mx-auto mb-3"><i className="bi bi-arrow-repeat" /></div>
            <h3 className="card-title">Built to evolve</h3>
            <p>We design systems and codebases that your internal team can extend long after launch.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* TEAM */}
  <section className="section">
    <div className="container">
      <div className="row section-header justify-content-center text-center">
        <div className="col-lg-7 reveal">
          <span className="eyebrow">Leadership</span>
          <h2 className="section-title">Meet the people steering the ship</h2>
        </div>
      </div>
      <div className="row g-4">
        <div className="col-md-6 col-lg-3 reveal">
          <div className="card-premium text-center">
            <img src="https://i.pravatar.cc/160?img=8" className="rounded-circle mb-3" style={{width: 96, height: 96, objectFit: 'cover'}} alt="Daniel Hwang, CEO" />
            <h3 className="card-title">Daniel Hwang</h3>
            <p className="text-primary-custom fw-semibold mb-2">CEO &amp; Co-Founder</p>
            <p className="small">Formerly led product at two YC-backed startups before founding Nexora.</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 reveal">
          <div className="card-premium text-center">
            <img src="https://i.pravatar.cc/160?img=47" className="rounded-circle mb-3" style={{width: 96, height: 96, objectFit: 'cover'}} alt="Priya Nair, Head of Design" />
            <h3 className="card-title">Priya Nair</h3>
            <p className="text-primary-custom fw-semibold mb-2">Head of Design</p>
            <p className="small">Leads the design system practice and a team of 14 product designers.</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 reveal">
          <div className="card-premium text-center">
            <img src="https://i.pravatar.cc/160?img=52" className="rounded-circle mb-3" style={{width: 96, height: 96, objectFit: 'cover'}} alt="Marcus Lee, Head of Engineering" />
            <h3 className="card-title">Marcus Lee</h3>
            <p className="text-primary-custom fw-semibold mb-2">Head of Engineering</p>
            <p className="small">Oversees architecture and DevOps across all active client builds.</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 reveal">
          <div className="card-premium text-center">
            <img src="https://i.pravatar.cc/160?img=25" className="rounded-circle mb-3" style={{width: 96, height: 96, objectFit: 'cover'}} alt="Anna Kowalski, Client Success Lead" />
            <h3 className="card-title">Anna Kowalski</h3>
            <p className="text-primary-custom fw-semibold mb-2">Client Success Lead</p>
            <p className="small">Your main point of contact — keeps every engagement on track.</p>
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
            <h2 className="mb-2">Want to work with us?</h2>
            <p className="mb-0 fs-5">We're currently accepting 3 new partners for Q3 2026.</p>
          </div>
          <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
            <a href="contact.html" className="btn btn-primary btn-lg-custom">Get in Touch <i className="bi bi-arrow-right ms-1" /></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

  )
}

export default About