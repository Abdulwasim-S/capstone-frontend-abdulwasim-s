import React, { useContext } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { AppContext } from "../App";
import imdb_clone from "../assets/imdb_pic.png";

const Projects = () => {
  const { mode, textMode } = useContext(AppContext);
  return (
    <div className="container-fluid p-5">
      <div
        className="heading pt-5 text-start mb-5"
        style={{ marginLeft: "4%" }}
      >
        Projects
      </div>
      <div className="row justify-content-center" style={{ height: "100%" }}>
        <div className="col-md-4" data-aos="fade-up" data-aos-duration="500">
          <div class={"card bg-" + mode}>
            <div className="card-img">
              <LazyLoadImage
                effect="blur"
                src={imdb_clone}
                class="card-img-top"
                alt="brewery"
              />
            </div>
            <div class="card-body">
              <h2 class={"card-title text-" + textMode}>IMDB Clone</h2>
              <p class={"card-text text-" + textMode}>
                You can get information about the movie from this IMDB clone
                application
              </p>
              <div className="btn-row ">
                <a
                  href="https://imdb-clone-frontend-abdulwasim-s.vercel.app/"
                  class="btn btn-success mb-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit
                </a>
                <a
                  href="https://github.com/Abdulwasim-S/imdb-clone-frontend"
                  class="btn btn-success mb-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source Code FE
                </a>
                <a
                  href="https://github.com/Abdulwasim-S/IMDB-Backend"
                  class="btn btn-success mb-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source Code BE
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4" data-aos="fade-up" data-aos-duration="500">
          <div class={"card bg-" + mode}>
            <div className="card-img">
              <LazyLoadImage
                effect="blur"
                src="https://drive.google.com/thumbnail?export=view&id=14iiABFw0pOegc_uYAHoq2OjywUfHPIIf&sz=w10000"
                class="card-img-top"
                alt="renten"
              />
            </div>
            <div class="card-body">
              <h2 class={"card-title text-" + textMode}>Product Rental App</h2>
              <p class={"card-text text-" + textMode}>
                The rental product application enables seamless product rentals
                with a user-friendly interface.
              </p>
              <div className="btn-row ">
                <a
                  href="https://guvi-hackthon2-frontend-abdulwasim-s.vercel.app/"
                  class="btn btn-success mb-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit
                </a>
                <a
                  href="https://github.com/Abdulwasim-S/guvi-hackthon2-frontend"
                  class="btn btn-success mb-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source Code FE
                </a>
                <a
                  href="https://github.com/Abdulwasim-S/password-reset-backend"
                  class="btn btn-success mb-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source Code BE
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 " data-aos="fade-up" data-aos-duration="500">
          <div class={"card bg-" + mode}>
            <div className="card-img">
              <LazyLoadImage
                effect="blur"
                src="https://drive.google.com/thumbnail?export=view&id=1hjUVjf3T4Ut66E6X-eFYpLTrwYufrnHl&sz=w10000"
                class="card-img-top"
                alt="urlshort"
              />
            </div>
            <div class="card-body">
              <h2 class={"card-title text-" + textMode}>React Markdown App</h2>
              <p class={"card-text text-" + textMode}>
                You can view and save React Markdown in this page.
              </p>
              <div className="btn-row ">
                <a
                  href="https://capstone-frontend-abdulwasim-s.vercel.app/"
                  class="btn btn-success mb-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit
                </a>
                <a
                  href="https://github.com/Abdulwasim-S/capstone-frontend-abdulwasim-s"
                  class="btn btn-success mb-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source Code FE
                </a>
                <a
                  href="https://github.com/Abdulwasim-S/capstone-backend-abdulwasim-s"
                  class="btn btn-success mb-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source Code BE
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 " data-aos="fade-up" data-aos-duration="500">
          <div class={"card bg-" + mode}>
            <div className="card-img">
              <LazyLoadImage
                effect="blur"
                src="https://drive.google.com/thumbnail?export=view&id=1LXqQVey9gxB0esy2rQkTNVHXmtlVcq0y&sz=w10000"
                class="card-img-top"
                alt="urlshort"
              />
            </div>
            <div class="card-body">
              <h2 class={"card-title text-" + textMode}>Job Searching App</h2>
              <p class={"card-text text-" + textMode}>
                You can hire and get hired by this page for free. You just have
                to login in it.
              </p>
              <div className="btn-row ">
                <a
                  href="https://chance-murex.vercel.app/"
                  class="btn btn-success mb-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit
                </a>
                <a
                  href="https://github.com/Abdulwasim-S/chance"
                  class="btn btn-success mb-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source Code FE
                </a>
                <a
                  href="https://github.com/Abdulwasim-S/chance-backend"
                  class="btn btn-success mb-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source Code BE
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 " data-aos="fade-up" data-aos-duration="500">
          <div class={"card bg-" + mode}>
            <div className={"card-text text-" + textMode}>
              <LazyLoadImage
                effect="blur"
                src="https://drive.google.com/thumbnail?export=view&id=1v9IyfHO0QTrNOpMyQ30T4frdExTTXewo&sz=w10000"
                class="card-img-top"
                alt="urlshort"
              />
            </div>
            <div class="card-body">
              <h2 class={"card-title text-" + textMode}>URL Shortener App</h2>
              <p class={"card-text text-" + textMode}>
                You can shorten long url in this page for free. You just have to
                create a account in it.
              </p>
              <div className="btn-row ">
                <a
                  href="https://url-shortener-eight-sigma.vercel.app/"
                  class="btn btn-success mb-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit
                </a>
                <a
                  href="https://github.com/Abdulwasim-S/url-shortener"
                  class="btn btn-success mb-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source Code FE
                </a>
                <a
                  href="https://github.com/Abdulwasim-S/short-url-backend"
                  class="btn btn-success mb-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source Code BE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
