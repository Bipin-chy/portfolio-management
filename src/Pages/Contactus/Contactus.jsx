import React from "react";
import "./Contactus.css";
import { ContactForm } from "../../components/UI/ContactForm";
import { Header } from "./../../components/UI/Header";
import { ContactCard } from "../../components/UI/ContactCard";
import contact from "./../../assets/header_contact.jpg";

const Contactus = () => {
  return (
    <>
      <div className="contactus_container">
        <Header title="Contact us" image={contact} />
        <div className="wrapper">
          <h2>Here We Are</h2>
          <div className="contact_map">
            <iframe
              src="https://maps.google.com/maps?q=budhanilkantha-10&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              title="Portfolio Management"
            ></iframe>
          </div>
          <ContactForm />
          <ContactCard />
        </div>
      </div>
    </>
  );
};

export default Contactus;
