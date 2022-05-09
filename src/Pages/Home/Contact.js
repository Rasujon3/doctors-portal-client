import React from "react";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const Contact = () => {
  return (
    <section
      className="justify-center items-center py-10"
      style={{ background: `url(${appointment})` }}
    >
      <div className="text-center my-5">
        <h4 className="text-xl text-primary text-bold">Contact US</h4>
        <h2 className="text-3xl text-white">Stay connected with us</h2>
      </div>
      <div className="flex flex-col gap-5 justify-center items-center mt-5">
        <input
          type="text"
          placeholder="Email Address"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Subject"
          className="input input-bordered w-full max-w-xs"
        />
        <textarea
          className="textarea textarea-bordered w-full max-w-xs"
          placeholder="Your Message"
        ></textarea>
        <PrimaryButton>Submit</PrimaryButton>
      </div>
    </section>
  );
};

export default Contact;
