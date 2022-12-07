import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        src: url("/Roslindale-DeckNarrowRegular.eot"); /* IE < 9 */
        src: url("/Roslindale-DeckNarrowRegular.eot?#")
            format("embedded-opentype"),
          /* IE 9 */ url("/Roslindale-DeckNarrowRegular.woff2") format("woff2"),
          url("/Roslindale-DeckNarrowRegular.woff") format("woff");
        font-family: "Roslindale Deck";
        font-style: normal;
        font-weight: normal;
        font-display: swap;
      }
      
      @font-face {
        src: url("/Roslindale-DeckNarrowMedium.eot"); /* IE < 9 */
        src: url("/Roslindale-DeckNarrowMedium.eot?#")
            format("embedded-opentype"),
          /* IE 9 */ url("/Roslindale-DeckNarrowMedium.woff2") format("woff2"),
          url("/Roslindale-DeckNarrowMedium.woff") format("woff");
        font-family: "Roslindale Deck";
        font-style: normal;
        font-weight: 500;
        font-display: swap;
      }
      
      @font-face {
        src: url("/Roslindale-DeckNarrowBold.eot"); /* IE < 9 */
        src: url("/Roslindale-DeckNarrowBold.eot?#") format("embedded-opentype"),
          /* IE 9 */ url("/Roslindale-DeckNarrowBold.woff2") format("woff2"),
          url("/Roslindale-DeckNarrowBold.woff") format("woff");
        font-family: "Roslindale Deck";
        font-style: normal;
        font-weight: bold;
        font-display: swap;
      }
      
      @font-face {
        src: url("/Roslindale-TextRegular.eot"); /* IE < 9 */
        src: url("/Roslindale-TextRegular.eot?#") format("embedded-opentype"),
          /* IE 9 */ url("/Roslindale-TextRegular.woff2") format("woff2"),
          url("/Roslindale-TextRegular.woff") format("woff");
        font-family: "Roslindale";
        font-style: normal;
        font-weight: normal;
        font-display: swap;
      }
      
      @font-face {
        src: url("/Roslindale-TextMedium.eot"); /* IE < 9 */
        src: url("/Roslindale-TextMedium.eot?#") format("embedded-opentype"),
          /* IE 9 */ url("/Roslindale-TextMedium.woff2") format("woff2"),
          url("/Roslindale-TextMedium.woff") format("woff");
        font-family: "Roslindale";
        font-style: normal;
        font-weight: 500;
        font-display: swap;
      }
      
      @font-face {
        src: url("/Roslindale-TextSemiBold.eot"); /* IE < 9 */
        src: url("/Roslindale-TextSemiBold.eot?#") format("embedded-opentype"),
          /* IE 9 */ url("/Roslindale-TextSemiBold.woff2") format("woff2"),
          url("/Roslindale-TextSemiBold.woff") format("woff");
        font-family: "Roslindale";
        font-style: normal;
        font-weight: 600;
        font-display: swap;
      }
      
      @font-face {
        src: url("/Roslindale-TextBold.eot"); /* IE < 9 */
        src: url("/Roslindale-TextBold.eot?#") format("embedded-opentype"),
          /* IE 9 */ url("/Roslindale-TextBold.woff2") format("woff2"),
          url("/Roslindale-TextBold.woff") format("woff");
        font-family: "Roslindale";
        font-style: normal;
        font-weight: bold;
        font-display: swap;
      }
    `}
  />
);

export default Fonts;
