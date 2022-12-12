import { MantineProvider } from "@mantine/core";

export const App = () => (
  <MantineProvider withGlobalStyles withNormalizeCSS>
    <App />
  </MantineProvider>
);
