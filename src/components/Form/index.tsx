import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import InputField from "../inputField";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { validationSchema } from "@/validation";
import TextArea from "../TextArea";
import { Button } from "react-bootstrap";
const BasicForm = () => {
  const form = useRef<HTMLFormElement| any>();
const SERVICEID = process.env.REACT_APP_EMAILJS_SERVICE_ID || '';
const TEMPID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '';
const PUBLICID = process.env.REACT_APP_EMAILJS_USER_ID || '';
console.log(SERVICEID, TEMPID, PUBLICID, 'id>>>>>>>>>>>' )
  const initialValues = { user_name: "", user_email: "", message: "" };
  const onSubmit=(values: any, {resetForm}: any) => {
    console.log(values , 'refffff')

    emailjs.sendForm(SERVICEID, TEMPID , values, PUBLICID)
    .then((result: any) => {
      console.log(result);
    }, (error: any) => {
      console.log(error);
      resetForm({values: ''});
    });
  }

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        // ref={form}
      >
        {({ errors, touched }: any) => (
          <Form autoComplete="false"    ref={form}>
            <div className="form-group mb-4">
              <Field
                component={InputField}
                error={errors.validationSchema && touched.validationSchema}
                name="user_name"
                className="form-control"
                type="text"
                placeholder="enter your name"
              />
              <ErrorMessage component="div" name="user_name" className="error" />
            </div>

            <div className="form-group my-4">
              <Field
                component={InputField}
                error={errors.validationSchema && touched.validationSchema}
                name="user_email"
                className="form-control"
                type="email"
                placeholder="enter your email"
              />
              <ErrorMessage component="div" name="user_email" className="error" />
            </div>

            <div className="form-group my-4">
              <Field
                component={TextArea}
                error={errors.validationSchema && touched.validationSchema}
                name="message"
                className="form-control"
                type="textarea"
                placeholder="enter your message.."
                rows={3}
              />
              <ErrorMessage component="div" name="message" className="error" />
            </div>
            <div className="form-group">
              <Button
                size="lg"
                type="submit"
                className="btn btn-dark submit"
              >
                Submit
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BasicForm;
