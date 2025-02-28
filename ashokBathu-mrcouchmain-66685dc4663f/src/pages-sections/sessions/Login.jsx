import { useCallback, useState,useEffect } from "react";
import { Button, Card, Box, styled } from "@mui/material";
import Link from "next/link";
import * as yup from "yup";
import { useFormik } from "formik";
import { H1, H4, H6 } from "components/Typography";
import BazaarImage from "components/BazaarImage";
import BazaarTextField from "components/BazaarTextField";
import SocialButtons from "./SocialButtons";
import EyeToggleButton from "./EyeToggleButton";
import { FlexBox, FlexRowCenter } from "components/flex-box";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import swal from "sweetalert";
import { fetchSignIn } from "./_redux/authAction";
import Router from "next/router";

const fbStyle = {
  background: "#3B5998",
  color: "white",
};
const googleStyle = {
  background: "#4285F4",
  color: "white",
};
export const Wrapper = styled(({ children, passwordVisibility, ...rest }) => (
  <Card {...rest}>{children}</Card>
))(({ theme, passwordVisibility }) => ({
  width: 500,
  padding: "2rem 3rem",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
  ".passwordEye": {
    color: passwordVisibility
      ? theme.palette.grey[600]
      : theme.palette.grey[400],
  },
  ".facebookButton": {
    marginBottom: 10,
    ...fbStyle,
    "&:hover": fbStyle,
  },
  ".googleButton": {
    ...googleStyle,
    "&:hover": googleStyle,
  },
  ".agreement": {
    marginTop: 12,
    marginBottom: 24,
  },
}));
const Login = () => {
  const dispatch = useDispatch();
  const loginUser = useSelector((state) => state?.Auth?.auth);
  console.log(loginUser)
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const togglePasswordVisibility = useCallback(() => {
    setPasswordVisibility((visible) => !visible);
  }, []);
  const [status, setStatus] = useState("");
  const token = useSelector((state) => state?.Auth?.token);

  useEffect(() => {
 if(token){
  console.log("heloooooooooo",token)
  Router.push("/recliners");
 }
  }, []);

  const handleFormSubmitOld = async (values) => {
    console.log(values);
  };
  const handleFormSubmit = () => {
    
    const loginData = {
      identifier: values.phone,
      password: values.password,
    };
    console.log(loginData)
    axios
      .post("http://3.0.78.116:8080/auth/local", loginData)
      // navigate("/Profile/overview");
      .then((response) => {
        const { data } = response;
        // console.log(response, "response");
        setStatus(response?.status);
        dispatch(fetchSignIn(data));
      })
      .catch((error) => {
        console.log("error", error);
        swal(error?.response?.data?.data[0]?.messages[0]?.message);
        // eslint-disable-next-line no-param-reassign
        error.clientMessage = "Can't find";
      });
  };
  if (status === 200) {
    Router.push("/franchise-store");
  }
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      onSubmit: handleFormSubmit,
      validationSchema: formSchema,
    });
  return (
    <Wrapper elevation={3} passwordVisibility={passwordVisibility}>
      <form onSubmit={handleSubmit}>
        <BazaarImage
          src="/assets/images/logomc.png"
          // sx={{
          //   m: "3.5",
          // }}
        />

        {/* <H1 textAlign="center" mt={1} mb={4} fontSize={16}>
          Welcome To Mr.Couch.
        </H1> */}
        <H4 textAlign="center" mt={1} mb={4} fontSize={16}>
          Franchise members login
        </H4>
        <BazaarTextField
          mb={1.5}
          fullWidth
          name="phone"
          size="small"
          type="mobile"
          variant="outlined"
          onBlur={handleBlur}
          value={values.phone}
          onChange={handleChange}
          label="Email or Phone Number"
          placeholder="exmple@mail.com"
          error={!!touched.phone && !!errors.phone}
          helperText={touched.phone && errors.phone}
        />

        <BazaarTextField
          mb={2}
          fullWidth
          size="small"
          name="password"
          label="Password"
          autoComplete="on"
          variant="outlined"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.password}
          placeholder="*********"
          type={passwordVisibility ? "text" : "password"}
          error={!!touched.password && !!errors.password}
          helperText={touched.password && errors.password}
          InputProps={{
            endAdornment: (
              <EyeToggleButton
                show={passwordVisibility}
                click={togglePasswordVisibility}
              />
            ),
          }}
        />

        <Button
          fullWidth
          type="submit"
          color="primary"
          variant="contained"
          sx={{
            height: 44,
          }}
        >
          Login
        </Button>
      </form>

      {/* <SocialButtons /> */}

      <FlexRowCenter mt="1.25rem">
        <Box>Don&apos;t have account?</Box>
        <Link href="/signup">
          <H6 ml={1} borderBottom="1px solid" borderColor="grey.900">
            Sign Up
          </H6>
        </Link>
      </FlexRowCenter>

      <FlexBox
        justifyContent="center"
        bgcolor="grey.200"
        borderRadius="4px"
        py={2.5}
        mt="1.25rem"
      >
        Forgot your password?
        <Link href="/reset-password">
          <H6 ml={1} borderBottom="1px solid" borderColor="grey.900">
            Reset It
          </H6>
        </Link>
      </FlexBox>
    </Wrapper>
  );
};
const initialValues = {
  phone: "",
  password: "",
};
const formSchema = yup.object().shape({
  password: yup.string().required("Password is required"),
  phone: yup.string().matches(/^[6-9]\d{9}$/, {message: "Please enter valid number.", excludeEmptyString: false}).required("phone number is required"),
});
export default Login;
