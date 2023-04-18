import React, { Fragment } from "react";
/** @jsx jsx */
/** @jsx jsx */
import { jsx, Heading, Text, Box } from "theme-ui";

const HistoricDistrictsArticle = () => {
  return (
    <Box sx={{ maxWidth: "800px", mx: "auto", px: 3 }} pt={6}>
      <Heading as="h1" variant="headline">
        Historic Districts: How Preservation Regulations Impact Property
        Development and Construction
      </Heading>
      <Box sx={{ my: 4 }}>
        <Text>
          Historic districts are designated areas that contain buildings,
          structures, or sites of historic, architectural, or cultural
          significance. These districts are intended to preserve the character
          and history of a community, and often come with a set of regulations
          that impact property development and construction. In this article, we
          will explore how historic districts can impact property development
          and the construction process.
        </Text>
      </Box>
      <Heading as="h2" variant="subheadline">
        Design Guidelines and Review Process
      </Heading>
      <Box sx={{ my: 4 }}>
        <Text>
          One of the primary ways in which historic districts impact property
          development and construction is through the design guidelines and
          review process. Historic district regulations often require that new
          construction and renovations are in keeping with the historic
          character of the district. Property owners may need to submit plans to
          a local historic preservation commission for review and approval
          before construction can begin. This review process can impact
          construction timelines and add costs to the project.
        </Text>
      </Box>
      <Heading as="h2" variant="subheadline">
        Materials and Construction Techniques
      </Heading>
      <Box sx={{ my: 4 }}>
        <Text>
          Historic district regulations may also impact the materials and
          construction techniques that can be used in property development and
          construction. For example, regulations may require the use of specific
          materials, such as brick or stone, to maintain the historic character
          of the district. Construction techniques may also be regulated to
          ensure that they are consistent with historic construction methods.
        </Text>
      </Box>
      <Heading as="h3" variant="subheadline">
        Building Height and Setbacks
      </Heading>
      <Box sx={{ my: 4 }}>
        <Text>
          Historic district regulations may impact building height and setbacks.
          This can impact property development and construction by limiting the
          height of new buildings and requiring setbacks that may reduce the
          amount of developable space on a site. Developers must be aware of
          these regulations when selecting sites and designing buildings.
        </Text>
      </Box>
      <Heading as="h2" variant="subheadline">
        Tax Credits and Incentives
      </Heading>
      <Box sx={{ my: 4 }}>
        <Text>
          Historic district regulations may also impact property development and
          construction by providing tax credits and incentives for the
          preservation and rehabilitation of historic buildings. These
          incentives can offset the costs associated with historic preservation
          and make it more financially feasible to develop and rehabilitate
          historic properties.
        </Text>
      </Box>
      <Heading as="h2" variant="subheadline">
        Impact on Property Value
      </Heading>
      <Box sx={{ my: 4 }}>
        <Text>
          Historic districts may impact the value of properties within the
          district. Properties in historic districts may be considered more
          desirable, which can increase their value. However, the regulations
          associated with historic districts may also limit the market for these
          properties and make them less attractive to some buyers.
        </Text>
      </Box>
      <Heading as="h2" variant="subheadline">
        Conclusion
      </Heading>
      <Box sx={{ my: 4 }}>
        <Text>
          Historic districts are an important tool for preserving the history
          and character of a community. However, these regulations can impact
          property development and construction by requiring design guidelines
          and review processes, regulating materials and construction
          techniques, limiting building height and setbacks, and providing tax
          credits and incentives. Developers must be aware of these regulations
          when selecting sites and designing buildings. With careful planning
          and consideration, property development and construction can be
          successfully accomplished in historic districts while preserving their
          unique character and history.
        </Text>
      </Box>
    </Box>
  );
};

export default HistoricDistrictsArticle;
