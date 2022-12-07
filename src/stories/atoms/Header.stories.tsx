import { Meta, StoryFn } from "@storybook/react";
import { getThemingArgTypes } from "@chakra-ui/storybook-addon";
import { Heading, ThemingProps, theme } from "@chakra-ui/react";


export default {
  title: "Anima/Atoms/Heading",
  // get controls for `variant`, `size` and `colorScheme`
  argTypes: getThemingArgTypes(theme, "Button"),
} as Meta;

interface StoryProps extends ThemingProps<"Heading"> {}

export const Basic: StoryFn<StoryProps> = (props) => (
  <Heading {...props}>Heading</Heading>
);
