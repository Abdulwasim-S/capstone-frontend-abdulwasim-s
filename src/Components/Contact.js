import { Email, LinkedIn, WhatsApp } from "@mui/icons-material";
import React, { useContext } from "react";
import { AppContext } from "../App";

const Contact = () => {
  const { textMode } = useContext(AppContext);
  return (
    <div className="pb-5">
      <div className="heading pt-5 text-start" style={{ marginLeft: "7%" }}>
        Contact
      </div>
      <div className="contact pt-3">
        <LinkedIn />{" "}
        <a
          className={"text-decoration-none text-" + textMode}
          href="https://www.linkedin.com/in/abdulwasim-shagulhamedhu-562a441a6"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <br />
        <br />
        <Email /> <email>abdulwasimsmech@gmail.com</email>
        <br />
        <br />
        <WhatsApp />{" "}
        <a
          className={"text-decoration-none text-" + textMode}
          href="https://wa.me/918778354776"
          target="_blank"
          rel="noreferrer"
        >
          +91-877-835-4776
        </a>
      </div>
    </div>
  );
};

export default Contact;
