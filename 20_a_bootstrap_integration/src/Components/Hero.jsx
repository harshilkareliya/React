import React from 'react';

function Hero() {
    return (
        <div>
            <section id="hero">

                <div className="hero-content" data-aos="fade-up">
                    <h2>Making <span>your ideas</span><br/>happen!</h2>
                    <div>
                        <a href="#about" className="btn-get-started scrollto">Get Started</a>
                        <a href="#portfolio" className="btn-projects scrollto">Our Projects</a>
                    </div>
                </div>

                <div className="hero-slider swiper">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide" style={{backgroundImage: "url('assets/img/hero-carousel/1.jpg')"}}></div>
                        <div className="swiper-slide" style={{backgroundImage: "url('assets/img/hero-carousel/2.jpg')"}}></div>
                        <div className="swiper-slide" style={{backgroundImage: "url('assets/img/hero-carousel/3.jpg')"}}></div>
                        <div className="swiper-slide" style={{backgroundImage: "url('assets/img/hero-carousel/4.jpg')"}}></div>
                        <div className="swiper-slide" style={{backgroundImage: "url('assets/img/hero-carousel/5.jpg')"}}></div>
                    </div>
                </div>

            </section>
        </div>
    );
}

export default Hero;
