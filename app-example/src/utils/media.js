import { css } from "styled-components";

const sizes = {
  phone: 600,
  sm: 600,
  md: 960,
  desktop: 601,
};

// Iterate through the sizes and create a media template
export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (${label === "desktop" ? "min-" : "max-"}width: ${sizes[label] /
      16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});
