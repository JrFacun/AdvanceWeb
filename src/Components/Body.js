import React, { } from "react";
import { Link } from "react-router-dom";
import Products from "./Products";
function Body() {
  return (
    <>

      <div>
        {/* Services*/}
        <section className="page-section" id="services">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">Services</h2>
              <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
            <div className="row text-center">
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fas fa-circle fa-stack-2x text-primary" />
                  <i className="fas fa-shopping-cart fa-stack-1x fa-inverse" />
                </span>
                <h4 className="my-3">E-Commerce</h4>
                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
              </div>
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fas fa-circle fa-stack-2x text-primary" />
                  <i className="fas fa-laptop fa-stack-1x fa-inverse" />
                </span>
                <h4 className="my-3">Responsive Design</h4>
                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
              </div>
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fas fa-circle fa-stack-2x text-primary" />
                  <i className="fas fa-lock fa-stack-1x fa-inverse" />
                </span>
                <h4 className="my-3">Web Security</h4>
                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
              </div>
            </div>
          </div>
        </section>

        <Products />

        {/* About*/}
        <section className="page-section" id="about">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">About</h2>
              <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
            <ul className="timeline">
              <li>
                <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/1.jpg" alt="..." /></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>2009-2011</h4>
                    <h4 className="subheading">Our Humble Beginnings</h4>
                  </div>
                  <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/2.jpg" alt="..." /></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>March 2011</h4>
                    <h4 className="subheading">An Agency is Born</h4>
                  </div>
                  <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                </div>
              </li>
              <li>
                <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/3.jpg" alt="..." /></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>December 2015</h4>
                    <h4 className="subheading">Transition to Full Service</h4>
                  </div>
                  <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/4.jpg" alt="..." /></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>July 2020</h4>
                    <h4 className="subheading">Phase Two Expansion</h4>
                  </div>
                  <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <h4>
                    Be Part
                    <br />
                    Of Our
                    <br />
                    Story!
                  </h4>
                </div>
              </li>
            </ul>
          </div>
        </section>
        {/* Team*/}
        <section className="page-section bg-light" id="team">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
              <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="team-member">
                  <img className="mx-auto rounded-circle" src="assets/img/team/1.jpg" alt="..." />
                  <h4>Parveen Anand</h4>
                  <p className="text-muted">Lead Designer</p>
                  <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Twitter Profile"><i className="fab fa-twitter" /></a>
                  <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Facebook Profile"><i className="fab fa-facebook-f" /></a>
                  <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand LinkedIn Profile"><i className="fab fa-linkedin-in" /></a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="team-member">
                  <img className="mx-auto rounded-circle" src="assets/img/team/2.jpg" alt="..." />
                  <h4>Diana Petersen</h4>
                  <p className="text-muted">Lead Marketer</p>
                  <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Twitter Profile"><i className="fab fa-twitter" /></a>
                  <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Facebook Profile"><i className="fab fa-facebook-f" /></a>
                  <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen LinkedIn Profile"><i className="fab fa-linkedin-in" /></a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="team-member">
                  <img className="mx-auto rounded-circle" src="assets/img/team/3.jpg" alt="..." />
                  <h4>Larry Parker</h4>
                  <p className="text-muted">Lead Developer</p>
                  <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><i className="fab fa-twitter" /></a>
                  <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><i className="fab fa-facebook-f" /></a>
                  <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile"><i className="fab fa-linkedin-in" /></a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
            </div>
          </div>
        </section>
        {/* Clients*/}
        <div className="py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-3 col-sm-6 my-3">
                <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src="assets/img/logos/microsoft.svg" alt="..." aria-label="Microsoft Logo" /></a>
              </div>
              <div className="col-md-3 col-sm-6 my-3">
                <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src="assets/img/logos/google.svg" alt="..." aria-label="Google Logo" /></a>
              </div>
              <div className="col-md-3 col-sm-6 my-3">
                <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src="assets/img/logos/facebook.svg" alt="..." aria-label="Facebook Logo" /></a>
              </div>
              <div className="col-md-3 col-sm-6 my-3">
                <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src="assets/img/logos/ibm.svg" alt="..." aria-label="IBM Logo" /></a>
              </div>
            </div>
          </div>
        </div>
        {/* Contact*/}
        <section className="page-section" id="contact">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">Contact Us</h2>
              <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
            {/* * * * * * * * * * * * * * * **/}
            {/* * * SB Forms Contact Form * **/}
            {/* * * * * * * * * * * * * * * **/}
            {/* This form is pre-integrated with SB Forms.*/}
            {/* To make this form functional, sign up at*/}
            {/* https://startbootstrap.com/solution/contact-forms*/}
            {/* to get an API token!*/}
            <form id="contactForm" data-sb-form-api-token="API_TOKEN">
              <div className="row align-items-stretch mb-5">
                <div className="col-md-6">
                  <div className="form-group">
                    {/* Name input*/}
                    <input className="form-control" id="name" type="text" placeholder="Your Name *" data-sb-validations="required" />
                    <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                  </div>
                  <div className="form-group">
                    {/* Email address input*/}
                    <input className="form-control" id="email" type="email" placeholder="Your Email *" data-sb-validations="required,email" />
                    <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                    <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                  </div>
                  <div className="form-group mb-md-0">
                    {/* Phone number input*/}
                    <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" data-sb-validations="required" />
                    <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group form-group-textarea mb-md-0">
                    {/* Message input*/}
                    <textarea className="form-control" id="message" placeholder="Your Message *" data-sb-validations="required" defaultValue={""} />
                    <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                  </div>
                </div>
              </div>
              {/* Submit success message*/}
              {/**/}
              {/* This is what your users will see when the form*/}
              {/* has successfully submitted*/}
              <div className="d-none" id="submitSuccessMessage">
                <div className="text-center text-white mb-3">
                  <div className="fw-bolder">Form submission successful!</div>
                  To activate this form, sign up at
                  <br />
                  <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                </div>
              </div>
              {/* Submit error message*/}
              {/**/}
              {/* This is what your users will see when there is*/}
              {/* an error submitting the form*/}
              <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
              {/* Submit Button*/}
              <div className="text-center"><button className="btn btn-primary btn-xl text-uppercase disabled" id="submitButton" type="submit">Send Message</button></div>
            </form>
          </div>
        </section>
      </div >

    </>
  );
}

export default Body;