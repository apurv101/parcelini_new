//  npm run build && mv .next/ out/

import React, { useState } from "react";
import { Box, Container, Grid, Button, Input, Heading, Text } from "theme-ui";

import Image from "components/image";
import img1 from "assets/partner-1-1.png";
import img2 from "assets/partner-1-2.png";
import img3 from "assets/partner-1-3.png";
import { usePlacesWidget } from "react-google-autocomplete";
import { useRouter } from "next/router";

import bannerImg from "assets/banner-image-1-1.png";

const Banner = () => {
  const [email, setEmail] = useState(null);
  const [address, setAddress] = useState(null);
  const router = useRouter();

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("test");
    const form = e.target;
    const inputs = form.elements;

    // Access input values
    const address = inputs.address.value;
    const email = inputs.email.value;

    // Do something with the input values
    console.log(`Hello, ${address} ${email}!`);

    var formdata = new FormData();
    formdata.append("address", address);
    formdata.append("email", email);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("https://safe-depths-30174.herokuapp.com/submit", requestOptions)
      .then((response) => response.text())
      .then((result) => router.push('/submission/thank-you'))
      .catch((error) => console.log("error", error));
  };

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    // setInputField((prev ) => ({...prev, [e.target.name] : e.target.value}))
    // console.log(name, value);
    setInputField({ ...inputField, [name]: value });
  };

  const { ref, autocompleteRef } = usePlacesWidget({
    apiKey: "AIzaSyDKKpSE1qXqBrNKfclQadDFjMSz3zna3ik",
    onPlaceSelected: (place) => {
      console.log(place);
    },
    options: {
      types: ["address"],
      componentRestrictions: { country: "us" },
    },
  });

  return (
    <Box sx={styles.banner} id="banner">
      <Container sx={styles.container}>
        <Grid sx={styles.grid}>
          <Box sx={styles.content}>
            <Heading as="h3">
              Get Most Comprehensive report of your property
            </Heading>

            <Box as="form" sx={styles.form} onSubmit={submitHandler}>
              <Box as="label" htmlFor="subscribe" variant="styles.srOnly">
                subscribe
              </Box>

              <Input
                type="address"
                id="subscribe"
                placeholder="Search an Address"
                sx={styles.form.input}
                name="address"
                ref={ref}
                onChange={setAddress}
              />
              <Input
                name="email"
                type="email"
                id="subscribe"
                placeholder="Enter your Email"
                sx={styles.form.input}
                onChange={setEmail}
              />
              <Button type="submit" sx={styles.form.button}>
                Go &#8594;
              </Button>

              <Text as="p">
                Get complete report in your inbox within 15 minutes
              </Text>
            </Box>
            {/* <Box sx={styles.partner}>
              <Text as="span">Sponsored by:</Text>
              <Box as="div">
                <Image src={img1} alt="" />
              </Box>
              <Box as="div">
                <Image src={img2} alt="" />
              </Box>
              <Box as="div">
                <Image src={img3} alt="" />
              </Box>
            </Box> */}
          </Box>
          <Box sx={styles.image}>
            <Image src={bannerImg} alt="" />
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;

const styles = {
  banner: {
    pt: ["110px", null, null, null, "150px", "200px"],
    pb: ["50px", null, null, null, "60px", null, "0"],
    backgroundColor: "#F6F8FB",
    overflow: "hidden",
  },
  container: {
    width: [null, null, null, null, null, null, "1390px"],
  },
  grid: {
    display: "grid",
    gridTemplateColumns: ["1fr", null, null, "1fr 1fr"],
    gridGap: "0",
  },
  content: {
    h3: {
      color: "black",
      fontWeight: "bold",
      lineHeight: [1.39],
      letterSpacing: ["-.7px", "-1.5px"],
      mb: ["15px", null, null, null, "20px"],
      width: ["100%"],
      maxWidth: ["100%", null, null, "90%", "100%", "540px"],
      fontSize: [6, null, null, "36px", null, "50px", 9],
    },
    p: {
      fontSize: [1, null, null, 1, null, 2],
      lineHeight: ["26px", null, null, null, 2.33],
      color: "text_secondary",
      mb: ["20px", null, null, null, null, "30px"],
      width: ["100%"],
      maxWidth: ["100%", null, null, null, null, "410px"],
      br: {
        display: ["none", null, null, null, "inherit"],
      },
    },
  },
  form: {
    mb: ["30px", null, null, null, null, "60px"],
    display: ["flex"],
    flexDirection: ["column"],
    input: {
      borderRadius: ["4px"],
      backgroundColor: "#fff",
      width: ["auto", null, null, null, "315px", null, "375px"],
      height: ["45px", null, null, "55px", null, null, "65px"],
      padding: ["0 15px", null, null, "0 25px"],
      fontSize: [1, null, null, 2],
      border: "none",
      outline: "none",
      boxShadow: "0px 10px 50px rgba(48, 98, 145, 0.08)",
      mb: ["30px", null, null, null, null, "10px"],
    },
    button: {
      fontSize: [1, null, null, null, 2, "20px"],
      borderRadius: ["4px"],
      padding: ["0 15px"],
      height: ["45px", null, null, "55px", null, null, "65px"],
      // ml: ["10px"],
      // width: ["auto", null, null, null, "180px"],
      width: ["auto", null, null, null, "315px", null, "375px"],
    },
  },
  image: {
    img: {
      display: "flex",
      mixBlendMode: "darken",
      position: "relative",
      top: ["0", null, null, null, null, "-40px"],
      maxWidth: ["100%", null, null, null, null, null, "none"],
    },
  },
  partner: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    mb: ["40px"],
    "> div + div": {
      ml: ["10px", null, null, "20px", null, "30px"],
    },
    img: {
      display: "flex",
    },
    span: {
      fontSize: [1, null, null, null, 2],
      color: "#566272",
      lineHeight: [1],
      opacity: 0.6,
      display: "block",
      mb: ["20px", null, null, null, "0px"],
      mr: [null, null, null, null, "20px"],
      flex: ["0 0 100%", null, null, null, "0 0 auto"],
    },
  },
};
