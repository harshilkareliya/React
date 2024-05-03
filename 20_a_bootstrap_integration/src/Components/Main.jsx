import React from 'react'

function Main() {
    return (
        <div>
            <main id="main">

                {/* <!-- ======= About Section ======= --> */}
                <section id="about">
                    <div className="container" data-aos="fade-up">
                        <div className="row">
                            <div className="col-lg-6 about-img">
                                <img src="assets/img/about-img.jpg" alt="" />
                            </div>

                            <div className="col-lg-6 content">
                                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing</h2>
                                <h3>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>

                                <ul>
                                    <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                    <li><i className="bi bi-check-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                    <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- End About Section -->

<!-- ======= Services Section ======= --> */}
                <section id="services">
                    <div className="container" data-aos="fade-up">
                        <div className="section-header">
                            <h2>Services</h2>
                            <p>Sed tamen tempor magna labore dolore dolor sint tempor duis magna elit veniam aliqua esse amet veniam enim export quid quid veniam aliqua eram noster malis nulla duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore</p>
                        </div>

                        <div className="row gy-4">

                            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                                <div className="box">
                                    <div className="icon"><i className="bi bi-briefcase"></i></div>
                                    <h4 className="title"><a href="">Lorem Ipsum</a></h4>
                                    <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident etiro rabeta lingo.</p>
                                </div>
                            </div>

                            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                                <div className="box">
                                    <div className="icon"><i className="bi bi-card-checklist"></i></div>
                                    <h4 className="title"><a href="">Dolor Sitema</a></h4>
                                    <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata nodera clas.</p>
                                </div>
                            </div>

                            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
                                <div className="box">
                                    <div className="icon"><i className="bi bi-bar-chart"></i></div>
                                    <h4 className="title"><a href="">Sed ut perspiciatis</a></h4>
                                    <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur trinige zareta lobur trade.</p>
                                </div>
                            </div>

                            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
                                <div className="box">
                                    <div className="icon"><i className="bi bi-binoculars"></i></div>
                                    <h4 className="title"><a href="">Magni Dolores</a></h4>
                                    <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum rideta zanox satirente madera</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* <!-- End Services Section -->

<!-- ======= Clients Section ======= --> */}
                <section id="clients">
                    <div className="container" data-aos="fade-up">
                        <div className="section-header">
                            <h2>Clients</h2>
                            <p>Sed tamen tempor magna labore dolore dolor sint tempor duis magna elit veniam aliqua esse amet veniam enim export quid quid veniam aliqua eram noster malis nulla duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore</p>
                        </div>

                        <div className="clients-slider swiper" data-aos="fade-up" data-aos-delay="100">
                            <div className="swiper-wrapper align-items-center">
                                <div className="swiper-slide"><img src="assets/img/clients/client-1.png" className="img-fluid" alt="" /></div>
                                <div className="swiper-slide"><img src="assets/img/clients/client-2.png" className="img-fluid" alt="" /></div>
                                <div className="swiper-slide"><img src="assets/img/clients/client-3.png" className="img-fluid" alt="" /></div>
                                <div className="swiper-slide"><img src="assets/img/clients/client-4.png" className="img-fluid" alt="" /></div>
                                <div className="swiper-slide"><img src="assets/img/clients/client-5.png" className="img-fluid" alt="" /></div>
                                <div className="swiper-slide"><img src="assets/img/clients/client-6.png" className="img-fluid" alt="" /></div>
                                <div className="swiper-slide"><img src="assets/img/clients/client-7.png" className="img-fluid" alt="" /></div>
                                <div className="swiper-slide"><img src="assets/img/clients/client-8.png" className="img-fluid" alt="" /></div>
                            </div>
                            <div className="swiper-pagination"></div>
                        </div>
                    </div>
                </section>

                {/* <!-- End Clients Section -->

<!-- ======= Portfolio Section ======= --> */}
                <section id="portfolio" className="portfolio">
                    <div className="container" data-aos="fade-up">
                        <div className="section-header">
                            <h2>Our Portfolio</h2>
                            <p>Sed tamen tempor magna labore dolore dolor sint tempor duis magna elit veniam aliqua esse amet veniam enim export quid quid veniam aliqua eram noster malis nulla duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore</p>
                        </div>

                        <div className="row" data-aos="fade-up" data-aos-delay="100">
                            <div className="col-lg-12 d-flex justify-content-center">
                                <ul id="portfolio-flters">
                                    <li data-filter="*" className="filter-active">All</li>
                                    <li data-filter=".filter-app">App</li>
                                    <li data-filter=".filter-card">Card</li>
                                    <li data-filter=".filter-web">Web</li>
                                </ul>
                            </div>
                        </div>

                        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
                            {/* Portfolio items go here */}
                        </div>
                    </div>
                </section>

                {/* <!-- End Portfolio Section -->

<!-- ======= Testimonials Section ======= --> */}
                <section id="testimonials">
                    <div className="container" data-aos="fade-up">
                        <div className="section-header">
                            <h2>Testimonials</h2>
                            <p>Sed tamen tempor magna labore dolore dolor sint tempor duis magna elit veniam aliqua esse amet veniam enim export quid quid veniam aliqua eram noster malis nulla duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore</p>
                        </div>

                        <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <p>
                                            <img src="assets/img/quote-sign-left.png" className="quote-sign-left" alt="" />
                                            Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                            <img src="assets/img/quote-sign-right.png" className="quote-sign-right" alt="" />
                                        </p>
                                        <img src="assets/img/testimonial-1.jpg" className="testimonial-img" alt="" />
                                        <h3>Saul Goodman</h3>
                                        <h4>Ceo &amp; Founder</h4>
                                    </div>
                                </div>
                                {/* End testimonial item */}

                                {/* Repeat the above structure for each testimonial */}

                            </div>
                            <div className="swiper-pagination"></div>
                        </div>
                    </div>
                </section>

                {/* <!-- End Testimonials Section -->

{/* Call To Action Section */}
                <section id="call-to-action">
                    <div className="container" data-aos="zoom-out">
                        <div className="row">
                            <div className="col-lg-9 text-center text-lg-start">
                                <h3 className="cta-title">Call To Action</h3>
                                <p className="cta-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                            <div className="col-lg-3 cta-btn-container text-center">
                                <a className="cta-btn align-middle" href="#">Call To Action</a>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Call To Action Section */}

                {/* Team Section */}
                <section id="team">
                    <div className="container" data-aos="fade-up">
                        <div className="section-header">
                            <h2>Our Team</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="member">
                                    <div className="pic"><img src="assets/img/team-1.jpg" alt="" /></div>
                                    <div className="details">
                                        <h4>Walter White</h4>
                                        <span>Chief Executive Officer</span>
                                        <div className="social">
                                            <a href=""><i className="bi bi-twitter"></i></a>
                                            <a href=""><i className="bi bi-facebook"></i></a>
                                            <a href=""><i className="bi bi-instagram"></i></a>
                                            <a href=""><i className="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="member">
                                    <div className="pic"><img src="assets/img/team-2.jpg" alt="" /></div>
                                    <div className="details">
                                        <h4>Walter White</h4>
                                        <span>Chief Executive Officer</span>
                                        <div className="social">
                                            <a href=""><i className="bi bi-twitter"></i></a>
                                            <a href=""><i className="bi bi-facebook"></i></a>
                                            <a href=""><i className="bi bi-instagram"></i></a>
                                            <a href=""><i className="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="member">
                                    <div className="pic"><img src="assets/img/team-3.jpg" alt="" /></div>
                                    <div className="details">
                                        <h4>Walter White</h4>
                                        <span>Chief Executive Officer</span>
                                        <div className="social">
                                            <a href=""><i className="bi bi-twitter"></i></a>
                                            <a href=""><i className="bi bi-facebook"></i></a>
                                            <a href=""><i className="bi bi-instagram"></i></a>
                                            <a href=""><i className="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="member">
                                    <div className="pic"><img src="assets/img/team-4.jpg" alt="" /></div>
                                    <div className="details">
                                        <h4>Walter White</h4>
                                        <span>Chief Executive Officer</span>
                                        <div className="social">
                                            <a href=""><i className="bi bi-twitter"></i></a>
                                            <a href=""><i className="bi bi-facebook"></i></a>
                                            <a href=""><i className="bi bi-instagram"></i></a>
                                            <a href=""><i className="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Repeat the above structure for each team member */}

                        </div>
                    </div>
                </section>
                {/* End Team Section */}


                {/* Contact Section */}
                <section id="contact">
                    <div className="container" data-aos="fade-up">
                        <div className="section-header">
                            <h2>Contact Us</h2>
                            <p>Sed tamen tempor magna labore dolore dolor sint tempor duis magna elit veniam aliqua esse amet veniam enim export quid quid veniam aliqua eram noster malis nulla duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore</p>
                        </div>

                        <div className="row contact-info">

                            <div className="col-md-4">
                                <div className="contact-address">
                                    <i className="bi bi-geo-alt"></i>
                                    <h3>Address</h3>
                                    <address>A108 Adam Street, NY 535022, USA</address>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="contact-phone">
                                    <i className="bi bi-phone"></i>
                                    <h3>Phone Number</h3>
                                    <p><a href="tel:+155895548855">+1 5589 55488 55</a></p>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="contact-email">
                                    <i className="bi bi-envelope"></i>
                                    <h3>Email</h3>
                                    <p><a href="mailto:info@example.com">info@example.com</a></p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="container mb-4">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22864.11283411948!2d-73.96468908098944!3d40.630720240038435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbg!4v1540447494452" width="100%" height="380" frameborder="0" style={{ border: "0" }} allowfullscreen></iframe>
                    </div>

                    <div className="container">
                        <div className="form">
                            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                                    </div>
                                    <div className="form-group col-md-6 mt-3 mt-md-0">
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                                </div>
                                <div className="form-group mt-3">
                                    <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                                </div>

                                <div className="my-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div>

                                <div className="text-center"><button type="submit">Send Message</button></div>
                            </form>
                        </div>
                    </div>
                </section>
                {/* End Contact Section */}


            </main>
        </div>
    )
}

export default Main