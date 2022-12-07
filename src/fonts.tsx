import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        src: url("./fonts/Roslindale-DeckNarrowRegular.eot"); /* IE < 9 */
        src: url("./fonts/Roslindale-DeckNarrowRegular.eot?#")
            format("embedded-opentype"),
          /* IE 9 */ url("./fonts/Roslindale-DeckNarrowRegular.woff2") format("woff2"),
          url("./fonts/Roslindale-DeckNarrowRegular.woff") format("woff");
        font-family: "Roslindale Deck";
        font-style: normal;
        font-weight: normal;
        font-display: swap;
      }
      
      @font-face {
        src: url("./fonts/Roslindale-DeckNarrowMedium.eot"); /* IE < 9 */
        src: url("./fonts/Roslindale-DeckNarrowMedium.eot?#")
            format("embedded-opentype"),
          /* IE 9 */ url("./fonts/Roslindale-DeckNarrowMedium.woff2") format("woff2"),
          url("./fonts/Roslindale-DeckNarrowMedium.woff") format("woff");
        font-family: "Roslindale Deck";
        font-style: normal;
        font-weight: 500;
        font-display: swap;
      }
      
      @font-face {
        src: url("./fonts/Roslindale-DeckNarrowBold.eot"); /* IE < 9 */
        src: url("./fonts/Roslindale-DeckNarrowBold.eot?#") format("embedded-opentype"),
          /* IE 9 */ url("./fonts/Roslindale-DeckNarrowBold.woff2") format("woff2"),
          url("./fonts/Roslindale-DeckNarrowBold.woff") format("woff");
        font-family: "Roslindale Deck";
        font-style: normal;
        font-weight: bold;
        font-display: swap;
      }
      
      @font-face {
        src: url("./fonts/Roslindale-TextRegular.eot"); /* IE < 9 */
        src: url("./fonts/Roslindale-TextRegular.eot?#") format("embedded-opentype"),
          /* IE 9 */ url("./fonts/Roslindale-TextRegular.woff2") format("woff2"),
          url("./fonts/Roslindale-TextRegular.woff") format("woff");
        font-family: "Roslindale";
        font-style: normal;
        font-weight: normal;
        font-display: swap;
      }
      
      @font-face {
        src: url("./fonts/Roslindale-TextMedium.eot"); /* IE < 9 */
        src: url("./fonts/Roslindale-TextMedium.eot?#") format("embedded-opentype"),
          /* IE 9 */ url("./fonts/Roslindale-TextMedium.woff2") format("woff2"),
          url("./fonts/Roslindale-TextMedium.woff") format("woff");
        font-family: "Roslindale";
        font-style: normal;
        font-weight: 500;
        font-display: swap;
      }
      
      @font-face {
        src: url("./fonts/Roslindale-TextSemiBold.eot"); /* IE < 9 */
        src: url("./fonts/Roslindale-TextSemiBold.eot?#") format("embedded-opentype"),
          /* IE 9 */ url("./fonts/Roslindale-TextSemiBold.woff2") format("woff2"),
          url("./fonts/Roslindale-TextSemiBold.woff") format("woff");
        font-family: "Roslindale";
        font-style: normal;
        font-weight: 600;
        font-display: swap;
      }
      
      @font-face {
        src: url("./fonts/Roslindale-TextBold.eot"); /* IE < 9 */
        src: url("./fonts/Roslindale-TextBold.eot?#") format("embedded-opentype"),
          /* IE 9 */ url("./fonts/Roslindale-TextBold.woff2") format("woff2"),
          url("./fonts/Roslindale-TextBold.woff") format("woff");
        font-family: "Roslindale";
        font-style: normal;
        font-weight: bold;
        font-display: swap;
      }
    `}
  />
);

export default Fonts;
