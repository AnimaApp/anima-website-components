import { Meta, StoryFn } from "@storybook/react";
import { getThemingArgTypes } from "@chakra-ui/storybook-addon";
import { Text, ThemingProps, theme } from "@chakra-ui/react";


export default {
  title: "Anima/Atoms/Text",
  // get controls for `variant`, `size` and `colorScheme`
  argTypes: getThemingArgTypes(theme, "Button"),
} as Meta;

interface StoryProps extends ThemingProps<"Text"> {}

export const Basic: StoryFn<StoryProps> = (props) => (
  <Text {...props}>Text</Text>
);
