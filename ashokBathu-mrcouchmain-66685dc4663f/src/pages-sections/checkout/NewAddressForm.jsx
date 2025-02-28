import React, { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import "yup-phone";

const phoneRegExp = /^((\\+[6-9]{1,2}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{3,10})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const checkoutSchema = yup.object({
  street2: yup.string(),
  name: yup.string().required("required"),
  street: yup.string().required("required"),
  phone: yup.string().required("required"),
  city: yup.string().required("required"),
  state: yup.string().required("required"),
  country: yup.string().required("required"),
  zip: yup.number().required("required"),
});
const initialValues = {
  name: "",
  street: "",
  street2: "",
  phone: "",
  city: "",
  state: "",
  country: "India",
  zip: 0,
};

// ==================================================================

// ==================================================================

const NewAddressForm = ({ setNewAddress }) => {
  const [addCardForm, setAddCardForm] = useState(false);
  const { handleChange, handleSubmit, errors, touched, values } = useFormik({
    initialValues: initialValues,
    validationSchema: checkoutSchema,
    onSubmit: (values, { resetForm }) => {
      setNewAddress(values);
      if (values) {
        setAddCardForm(false);
        resetForm(initialValues);
      }
    },
  });
  return (
    <Fragment>
      <Button
        color="primary"
        variant="outlined"
        sx={{
          p: "2px 20px",
        }}
        onClick={() =>
          addCardForm ? setAddCardForm(false) : setAddCardForm(true)
        }
      >
        Add  Customer
      </Button>

      <Dialog open={addCardForm} onClose={() => setAddCardForm(false)}>
        <DialogContent>
          <Typography variant="h6" mb={3}>
            Add Customer Information
          </Typography>

          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  type="text"
                  name="name"
                  value={values.name}
                  label="Enter Your Name"
                  onChange={handleChange}
                  helperText={touched.name && errors.name}
                  error={touched.name && Boolean(errors.name)}
                />
              </Grid>
              

              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  type="text"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  label="Enter Your Phone"
                  error={touched.phone && Boolean(errors.phone)}
                  helperText={touched.phone && errors.phone}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  type="text"
                  name="Email"
                  value={values.email}
                  onChange={handleChange}
                  label="Enter Your email Adress"
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  type="text"
                  name="street"
                  label="Street line 1"
                  value={values.street}
                  onChange={handleChange}
                  helperText={touched.street && errors.street}
                  error={touched.street && Boolean(errors.street)}
                />
              </Grid>

             

              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="city"
                  label="City"
                  value={values.city}
                  onChange={handleChange}
                  helperText={touched.city && errors.city}
                  error={touched.city && Boolean(errors.city)}
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="state"
                  label="State"
                  value={values.state}
                  onChange={handleChange}
                  helperText={touched.state && errors.state}
                  error={touched.state && Boolean(errors.state)}
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="zip"
                  label="Zip"
                  type="number"
                  value={values.zip}
                  onChange={handleChange}
                  helperText={touched.zip && errors.zip}
                  error={touched.zip && Boolean(errors.zip)}
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="country"
                  label="Country"
                  value={values.country}
                  onChange={handleChange}
                  helperText={touched.country && errors.country}
                  error={touched.country && Boolean(errors.country)}
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <Button color="primary" variant="contained" type="submit">
                  Save
                </Button>
              </Grid>
            </Grid>
          </form>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};
export default NewAddressForm;
