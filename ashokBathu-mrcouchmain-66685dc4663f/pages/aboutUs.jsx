import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ShopLayout1 from "components/layouts/ShopLayout1";

const useStyles = makeStyles((theme) => ({
  section: {
    padding: theme.spacing(3, 0),
  },
  heading: {
    marginBottom: theme.spacing(2),
    color: '#E3364E',
  },
  paragraph: {
    marginBottom: theme.spacing(1),
    fontSize: '1.05rem',
    textAlign:'justify',
  },
  aboutUsBlock: {
    backgroundColor: '#E3364E',  // Background color
    color: 'white',  // Text color
    marginTop:'15px',
    width:'100%',
    textAlign: 'center',
    marginBottom: theme.spacing(2),
  }
}));

const About = () => {
  const classes = useStyles();

  return (
    <ShopLayout1>
        <Box className={classes.aboutUsBlock}>
            <Typography variant="h2">About Us</Typography>
        </Box>
      <Container>
        <Box className={classes.section}>          
          <Typography variant="h3" className={classes.heading}>
            Welcome to Mr. Couch
          </Typography>
          <Typography variant="body1" className={classes.paragraph} marginTop='40px'>
            <strong>Welcome to Mr. Couch</strong>, where the symphony of restful sleep harmonizes
            with the precision of well-being. Our name is a melody inspired by
            the ultimate comfort and relaxation we strive to offer, and at Mr.
            Couch, we believe in gifting everyone the serenity of a peaceful and
            stylish living space.
          </Typography>
          <Typography variant="body1" className={classes.paragraph}>
            Founded by individuals with a robust background in the furniture and
            interior design industry, we comprehend the crucial link between
            comfort, health, and the quality of our living environments.
            Acknowledging the transformative power of a well-designed space and
            a good night's rest in shaping our daily lives, we embarked on a
            mission to provide high-quality furniture at an affordable price.
          </Typography>
        </Box>
        <Box className={classes.section}>
          <Typography variant="h4" className={classes.heading}>
            Our Meticulously Crafted Product Range Includes:
          </Typography>
          <Grid container>
            <Grid item xs={12} md={12}>
              <Typography variant="h5" className={classes.heading}>
                Sofas & Couches
              </Typography>
              <Typography variant="body1" className={classes.paragraph}>
                Immerse yourself in the world of comfort and sophistication with
                our bespoke collection of sofas and couches. Our collection is
                meticulously curated to cater to diverse tastes, whether you
                lean towards classic elegance or contemporary chic. Crafted with
                precision and attention to detail, our sofas not only elevate
                the aesthetics of your living space but also provide unparalleled
                comfort for moments of relaxation.
              </Typography>
            </Grid>
            <Grid item xs={11} md={12}>
              <Typography variant="h5" className={classes.heading}>
                Recliners
              </Typography>
              <Typography variant="body1" className={classes.paragraph}>
                Experience the ultimate in relaxation with our range of
                recliners, designed to offer the perfect blend of support and
                luxury. Whether you're looking for a place to unwind after a
                long day or a cozy spot to watch your favorite shows, our
                recliners provide the ideal solution.
              </Typography>
            </Grid>
            <Grid item xs={11} md={12}>
              <Typography variant="h5" className={classes.heading}>
                Mattresses
              </Typography>
              <Typography variant="body1" className={classes.paragraph}>
                <strong>Natural Latex Mattresses:</strong> Experience the luxury
                of natural latex, offering unparalleled comfort and support for
                a rejuvenating sleep experience.
              </Typography>
              <Typography variant="body1" className={classes.paragraph}>
                <strong>Spring Mattresses:</strong> Indulge in the perfect
                balance of support and flexibility with our premium spring
                mattresses, designed for a restful night's sleep.
              </Typography>
              <Typography variant="body1" className={classes.paragraph}>
                <strong>Rebonded Foam and HR Foam Mattresses:</strong> Engineered
                with precision, our mattresses intelligently adapt to your body
                shape, addressing concerns such as neck and back problems,
                ensuring optimal comfort.
              </Typography>
              <Typography variant="body1" className={classes.paragraph}>
                <strong>Memory Foam Mattresses:</strong> Immerse yourself in the
                contouring comfort of memory foam. Our mattresses cradle your
                body, providing personalized support and relieving pressure
                points for a truly restorative sleep.
              </Typography>
            </Grid>
            <Grid item xs={11} md={12}>
              <Typography variant="h5" className={classes.heading}>
                Chairs
              </Typography>
              <Typography variant="body1" className={classes.paragraph}>
                Our range of chairs combines ergonomic design with style,
                ensuring that whether you're working or relaxing, you do so in
                comfort and elegance. From office chairs to lounge chairs, we
                have options to suit every need. Our diverse range of chairs is 
                designed to cater to various needs and preferences, ensuring that 
                you find the perfect match for your space and lifestyle.
                we are committed to providing chairs that not only look great but 
                also enhance your comfort and well-being. Explore our collection to 
                find the perfect chair for every room in your home.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box className={classes.section}>
          <Typography variant="h5" className={classes.heading}>
            Interior Designing
          </Typography>
          <Typography variant="body1" className={classes.paragraph}>
            At Mr. Couch, we extend our passion for well-being to every corner
            of your home. Our interior designing services are tailored to create
            spaces that reflect your unique style and cater to your comfort. Our
            team of expert designers works closely with you to transform your
            home into a sanctuary of well-being and style. Our mission is to 
            transform your living spaces into havens of comfort, style, and functionality.
          </Typography>
          <Typography variant="body1" className={classes.paragraph}>
            We believe in creating spaces that are not only 
            aesthetically pleasing but also practical and reflective of your personality. 
            From the initial consultation to the final installation, we ensure that every 
            detail is meticulously planned and executed. We offer a full range of interior 
            designing services, including space planning, color consultation, furniture 
            selection, and decor styling. Whether you are renovating a single room or your 
            entire home, our designers provide innovative solutions tailored to your specific 
            requirements.
          </Typography>
        </Box>
        <Box className={classes.section}>
          <Typography variant="h5" className={classes.heading}>
            Pillows and Accessories
          </Typography>
          <Typography variant="body1" className={classes.paragraph}>
            At Mr. Couch, we understand that a pillow is not just an accessory 
            but a crucial element for a restful night's sleep. Our pillow range is 
            meticulously designed to cater to various sleep preferences and health needs. 
            We offer pillows made from high-quality materials such as memory foam, latex, 
            and down alternatives to provide optimal support and comfort.
          </Typography>

          <Typography variant = "body1" className={classes.paragraph}>
            Our pillows are available in different shapes and sizes to ensure you find 
            the perfect fit for your sleeping style, whether you’re a back, side, or stomach 
            sleeper. We believe that everyone deserves personalized comfort, which is why 
            our pillows are designed to adapt to your unique contours, offering the right 
            balance of softness and support.
          </Typography>
        </Box>
        <Box className={classes.section}>
          <Typography variant="h4" className={classes.heading}>
            Our Philosophy
          </Typography>
          <Typography variant="body1" className={classes.paragraph}>
            At Mr. Couch, we believe that your home should be a sanctuary of
            well-being and style. Relax and unwind with our assortment of
            exceptional luxury, as Mr. Couch redefines the way you experience
            comfort in your living space. Join us on this journey where comfort
            seamlessly meets style, and let Mr. Couch be your trusted companion
            in the pursuit of a rejuvenating lifestyle.
          </Typography>
        </Box>
      </Container>
    </ShopLayout1>
  );
};

export default About;