import React, { Fragment } from "react";
/** @jsx jsx */
/** @jsx jsx */
import { jsx, Heading, Text, Box } from "theme-ui";

const ZoningArticle = () => {
  return (
    <Box sx={{ maxWidth: "800px", mx: "auto", px: 3 }} pt={6}>
      <Heading as="h1" variant="headline">
        Zoning: What It Is, How It Works, and Its Controversies
      </Heading>
      <Box sx={{ my: 4 }}>
        <Text>
          Zoning is a land-use management tool that separates a city or
          municipality into different zones or districts, each with specific
          rules for the allowable land use, lot size, building height, and other
          development standards. It is intended to regulate the use of land,
          protect public health and safety, and promote the general welfare of
          the community. Zoning codes are typically created by local
          governments, such as city councils or planning commissions, and are
          enforced by building inspectors, zoning administrators, and other
          municipal officials.
        </Text>
      </Box>
      <Heading as="h2" variant="subheadline">
        History of Zoning in the United States
      </Heading>
      <Box sx={{ my: 4 }}>
        <Text>
          The first zoning ordinance was enacted in 1916 in New York City,
          following a landmark Supreme Court decision that upheld the right of
          municipalities to regulate land use. The purpose of the ordinance was
          to separate industrial and residential areas to reduce overcrowding
          and improve public health. Over time, zoning has evolved into a
          complex system of regulations that vary widely from one jurisdiction
          to another.
        </Text>
      </Box>
      <Heading as="h2" variant="subheadline">
        Zoning Controversies
      </Heading>
      <Box sx={{ my: 4 }}>
        <Text>
          Despite its well-intentioned purpose, zoning has been criticized for
          creating unintended consequences that perpetuate social and economic
          inequality. One such controversy occurred in Mount Laurel, New Jersey,
          in the 1970s when the city explicitly excluded low-income residents by
          adopting zoning codes that only permitted large, expensive homes and
          prohibited mobile homes and other affordable housing options. The New
          Jersey Supreme Court ruled that this practice was exclusionary and
          mandated that communities must zone for people of all incomes.
        </Text>
      </Box>
      <Heading as="h3" variant="subheadline">
        Critiques of Zoning
      </Heading>
      <Box sx={{ my: 4 }}>
        <Text>
          Critics of zoning argue that it has perpetuated social and economic
          inequalities by limiting access to affordable housing, creating
          segregated neighborhoods, and concentrating poverty in certain areas.
          Zoning has also been blamed for causing traffic congestion, reducing
          the availability of public transportation, and promoting urban sprawl.
          Some proponents of zoning reform advocate for changes that promote
          mixed-use development, increase affordable housing options, and
          prioritize walkable neighborhoods.
        </Text>
      </Box>
      <Heading as="h2" variant="subheadline">
        Zoning and Development Standards
      </Heading>
      <Box sx={{ my: 4 }}>
        <Text>
          Most zoning codes consist of three parts: the zoning map, the use
          table, and the development standards. The zoning map is a visual
          representation of the city or municipality divided into zones, each
          with specific land-use regulations. The use table specifies the
          allowable uses for each zone, such as residential, commercial, or
          industrial. The development standards provide guidelines for the size
          and design of buildings, the height of structures, the location of
          parking, and other details related to development.
        </Text>
      </Box>
      <Heading as="h2" variant="subheadline">
        Conclusion
      </Heading>
      <Box sx={{ my: 4 }}>
        <Text>
          While zoning has become an essential tool for regulating land use and
          promoting public welfare, it has also become a source of controversy,
          particularly as it relates to housing affordability and urban
          development. As communities continue to evolve, zoning codes must
          adapt to meet the needs of their residents and promote equitable
          access to resources and opportunities. Zoning reform efforts can help
          address the challenges of urban growth and promote more sustainable,
          livable communities for all.
        </Text>
      </Box>
    </Box>
  );
};

export default ZoningArticle;
