import React from "react";
import my_pic from "../assets/my_pic.jpg";

const About = () => {
  return (
    <div className="about px-2">
      <div className="container">
        <div className="row pt-5">
          <div className="heading px-2 text-start">About Me</div>

          <div className="col-md-5" style={{ overflow: "hidden" }}>
            <img
              data-aos="fade-left"
              data-aos-duration="1000"
              style={{ height: "90%", width: "90%" }}
              src="https://www.webstackacademy.com/wp-content/uploads/2023/01/Full-Stock-Hero.png"
              alt="images"
            />
          </div>
          <div
            className="col-md-7 text-start objective "
            style={{ overflow: "hidden" }}
          >
            <div data-aos-duration="1000" data-aos="fade-right">
              <br />
              <p>
                My name is Abdulwasim. I'm an experienced Full Stack Developer
                from TamilNadu.
              </p>
              <br />
              <p>
                I'm a passionate developer who continuously challenges myself to
                learn new skills in software development. I work with Front-End,
                Back-End, and Database technologies, and I have knowledge in
                Docker and Git CI/CD workflows. I develop applications using the
                MERN stack and am skilled at creating layouts provided to me.
              </p>
              <br />
              <p>
                I'm an hardworking smart worker and always seek to achieve my
                best version.
              </p>
              <a
                className="text-decoration-none"
                href="https://drive.google.com/file/d/1RXujIIVjVxopLqGkAWqLlSy_tncvuqrt/view?usp=sharing"
                rel="noreferrer"
                target="_blank"
              >
                Click here for my resume
              </a>
              <br />
              <a
                className="text-decoration-none"
                href="https://drive.google.com/file/d/1_T_wWvgYrPRNISI0afNA74G9f9ebCRc5/view?usp=sharing"
                rel="noreferrer"
                target="_blank"
              >
                Click here for FSD Cerificate
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
