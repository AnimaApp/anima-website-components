import React from "react";
import { MantineProvider } from "@mantine/core";

import { theme } from "./theme";
import Fonts from "./fonts";

function ThemeWrapper(props: { children: React.ReactNode }) {
  return (
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      <Fonts />
      {props.children}
    </MantineProvider>
  );
}

// enhance your stories with decorator that uses ThemeWrapper
export const decorators = [
  (renderStory: Function) => <ThemeWrapper>{renderStory()}</ThemeWrapper>,
];

export const parameters = {
  backgrounds: {
    default: "dark",
  },
};
