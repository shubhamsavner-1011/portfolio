import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const EmailForm = () => {
  const form = useRef<any>();

  const sendEmail = (e: any) => {
    e.preventDefault();
    console.log(form.current, "form>>>>>>>");
    emailjs
      .sendForm(
        "service_j5b449k",
        "template_fpp9r27",
        form.current,
        "mH5WXeMovRpXzQYJu"
      )
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <div>
          <label>Name</label>
          <input type="text" name="user_name" />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="user_email" />
        </div>

        <div>
          <label>Message</label>
          <textarea name="message" />
        </div>

        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default EmailForm;
