import React from "react";
import "./footer.css";
import { TypeAnimation } from "react-type-animation";

function Footer() {
  return (
    <section className="footer">
      <TypeAnimation
              data-aos="fade-up"
              sequence={["Get in Touch"]}
              speed={30}
              cursor={false}
              wrapper="h1"
              className="title"
            />
      <div>
        <a href="" data-aos="fade-up" data-aos-delay="50" data-aos-offset="0">
          <i class="bx bxl-linkedin"></i>
        </a>
        <a href="" data-aos="fade-up" data-aos-delay="200" data-aos-offset="0">
          <i class="bx bxl-instagram"></i>
        </a>
        <a href="" data-aos="fade-up" data-aos-delay="400" data-aos-offset="0">
          <i class="bx bxl-facebook"></i>
        </a>
        <a href="" data-aos="fade-up" data-aos-delay="500" data-aos-offset="0">
          <i class="bx bxl-github"></i>
        </a>
      </div>
    </section>
  );
}

export default Footer;
