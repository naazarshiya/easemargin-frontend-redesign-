import React from "react";
import "./ClientsSection.css";

import client1 from "../assets/client1.jpg";
import client2 from "../assets/client2.jpg";
import client3 from "../assets/client3.jpg";
import client4 from "../assets/client4.jpg";
import client5 from "../assets/client5.jpg";

const ClientsSection = () => {
  return (
    <section className="clients-wrapper">
      <div className="clients-container">

        <h2 className="clients-title">Our Clients</h2>
        <p className="clients-subtitle">Trusted by the Best in the Industry</p>

        <div className="circle-layout">

          <div className="row">
            <div className="colored-hex float-hex" style={{ background: "linear-gradient(135deg, #FF9A9E, #FAD0C4)" }}>
              <div className="inner-hex">
                <img src={client1} alt="Client 1" />
              </div>
            </div>

            <div className="colored-hex float-hex" style={{ background: "linear-gradient(135deg, #A18CD1, #FBC2EB)" }}>
              <div className="inner-hex">
                <img src={client2} alt="Client 2" />
              </div>
            </div>

            <div className="colored-hex float-hex" style={{ background: "linear-gradient(135deg, #84FAB0, #8FD3F4)" }}>
              <div className="inner-hex">
                <img src={client3} alt="Client 3" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="colored-hex float-hex" style={{ background: "linear-gradient(135deg, #FFD3A5, #FD6585)" }}>
              <div className="inner-hex">
                <img src={client4} alt="Client 4" />
              </div>
            </div>

            <div className="colored-hex float-hex" style={{ background: "linear-gradient(135deg, #F6D365, #FDA085)" }}>
              <div className="inner-hex">
                <img src={client5} alt="Client 5" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ClientsSection;
