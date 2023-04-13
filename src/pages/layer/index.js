import React, { Fragment, useState } from "react";
import { Box, Container, Flex, Heading, Text } from "theme-ui";
import City from "components/city/City";

const Layer = () => {
  const [enteredCity, setEnteredCity] = useState();
  console.log(enteredCity, "45454");
  const inputChangeHandler = (e) => {
    setEnteredCity(e.target.value);
  };

  const cityHandler = async (e) => {
    e.preventDefault();
    console.log(enteredCity, "6664");
    const response = await fetch(
      `https://safe-depths-30174.herokuapp.com/layer?city=${enteredCity}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data, "123456");
  };

  return (
    <Fragment>
      <City
        inputChangeHandler={inputChangeHandler}
        cityHandler={cityHandler}
        enteredCity={enteredCity}
      />
    </Fragment>
  );
};

export default Layer;
