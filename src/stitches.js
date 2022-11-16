// create stitches.js in src
import { createStitches } from "@stitches/react";

const stitches = createStitches({
  media: {
    bp1: "(max-width: 380px)",
    bp2: "(max-width: 768px)",
    bp3: "(max-width: 1200px)",
  },
  // breakpoints: {
  //   bp1: (rule) => `@media (min-width: 380px) { ${rule} }`,
  //   bp2: (rule) => `@media (min-width: 7680px) { ${rule} }`,
  //   bp2: (rule) => `@media (min-width: 900px) { ${rule} }`,
  // }
})

/*   // Sample to create theme insert in createStitches object
  theme: {
    colors: {
      // generated from coolors.co
      aliceBlue: "#F4FAFF",
      davyGrey: "#535657",

      cadetBlue: "#4F646F",
      platinum: "#DEE7E7",

      darkKhaki: "#B5BA72",
      darkSlateBlue: "#4F359B",

      // elements
      bg: "$aliceBlue",
      fg: "$davyGrey",
    },
    space: {
      xxs: "0.422rem",
      xs: "0.563rem",
      sm: "0.75rem",
      rg: "1rem",
      md: "1.33rem",
      lg: "1.77rem",
      xl: "2.369rem",
      xxl: "3.157rem",
    },
    fontSizes: {
      xxs: "0.422rem",
      xs: "0.563rem",
      sm: "0.75rem",
      rg: "1rem",
      md: "1.33rem",
      lg: "1.77rem",
      xl: "2.369rem",
      xxl: "3.157rem",
    },
  }, 
//Uncomment if defined globle styles from here  
const injectGlobalStyles = stitches.globalCss({
  "*": { boxSizing: "border-box", fontFamily: "Hammersmith One" },
  "*:after": { boxSizing: "border-box", fontFamily: "Hammersmith One" },
  "*:before": { boxSizing: "border-box", fontFamily: "Hammersmith One" },
  body: { margin: 0, padding: 0 },
  h1: { margin: 0 },
})

injectGlobalStyles() 

*/

export default stitches
