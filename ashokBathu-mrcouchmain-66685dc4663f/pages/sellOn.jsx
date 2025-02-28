import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const initialValues = {
  name: '',
  email: '',
  mobileNumber: '',
  city: '',
  state: '',
  pincode: '',
  gstNumber: '',
  category: '',
};

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  mobileNumber: Yup.string().matches(/^[0-9]{10}$/, 'Mobile number must be 10 digits').required('Mobile number is required'),
  city: Yup.string().required('City is required'),
  state: Yup.string().required('State is required'),
  pincode: Yup.string().matches(/^[0-9]{6}$/, 'Pincode must be 6 digits').required('Pincode is required'),
  gstNumber: Yup.string().matches(/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/, 'Invalid GST Number').required('GST Number is required'),
  category: Yup.string().required('Category is required'),
});

const SellOn = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  const inputStyle = {
    width: '25%',
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
  };

  const labelStyle = {
    marginBottom: '5px',
    display: 'block',
    fontWeight: 'bold',
  };

  const errorStyle = {
    color: 'red',
    fontSize: '14px',
    marginTop: '5px',
  };

  const selectStyle = {
    ...inputStyle,
  };

  const buttonStyle = {
    backgroundColor: '#3498db',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Registration Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            <div>
              <label htmlFor="name" style={labelStyle}>Name</label>
              <Field type="text" id="name" name="name" placeholder="Enter your name" style={inputStyle} />
              <ErrorMessage name="name" component="div" style={errorStyle} />
            </div>

            <div>
              <label htmlFor="email" style={labelStyle}>Email</label>
              <Field type="email" id="email" name="email" placeholder="Enter your email address" style={inputStyle} />
              <ErrorMessage name="email" component="div" style={errorStyle} />
            </div>

            <div>
              <label htmlFor="mobileNumber" style={labelStyle}>Mobile Number</label>
              <Field type="text" id="mobileNumber" name="mobileNumber" placeholder="Enter your mobile number" style={inputStyle} />
              <ErrorMessage name="mobileNumber" component="div" style={errorStyle} />
            </div>

            <div>
              <label htmlFor="city" style={labelStyle}>City</label>
              <Field type="text" id="city" name="city" placeholder="Enter your city" style={inputStyle} />
              <ErrorMessage name="city" component="div" style={errorStyle} />
            </div>

            <div>
              <label htmlFor="state" style={labelStyle}>State</label>
              <Field type="text" id="state" name="state" placeholder="Enter your state" style={inputStyle} />
              <ErrorMessage name="state" component="div" style={errorStyle} />
            </div>

            <div>
              <label htmlFor="pincode" style={labelStyle}>Pincode</label>
              <Field type="text" id="pincode" name="pincode" placeholder="Enter your pincode" style={inputStyle} />
              <ErrorMessage name="pincode" component="div" style={errorStyle} />
            </div>

            <div>
              <label htmlFor="gstNumber" style={labelStyle}>GST Number</label>
              <Field type="text" id="gstNumber" name="gstNumber" placeholder="Enter your GST number" style={inputStyle} />
              <ErrorMessage name="gstNumber" component="div" style={errorStyle} />
            </div>

            <div>
              <label htmlFor="category" style={labelStyle}>Category</label>
              <Field as="select" id="category" name="category" style={selectStyle}>
                <option value="">Select a category</option>
                <option value="chairs">Chairs</option>
                <option value="tables">Tables</option>
                <option value="cabinets">Cabinets</option>
              </Field>
              <ErrorMessage name="category" component="div" style={errorStyle} />
            </div>

            <button type="submit" disabled={isSubmitting} style={buttonStyle}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SellOn;
