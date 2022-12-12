import { Meta, StoryFn } from "@storybook/react";
import { Title } from "@mantine/core";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// import { getThemingArgTypes } from "@chakra-ui/storybook-addon";
// import { Heading, ThemingProps, theme } from "@chakra-ui/react";

// export default {
//   title: "Anima/Header",
//   // get controls for `variant`, `size` and `colorScheme`
//   argTypes: getThemingArgTypes(theme, "Heading"),
// } as Meta;

// interface StoryProps extends ThemingProps<"Heading"> {}

// export const Basic= (props) => (
// // export const Basic: StoryFn<StoryProps> = (props) => (
//   <Title {...props}>Heading</Title>
// );

export default {
  title: "Anima/Title",
  component: Title,
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;


export const NormalTitle = Template.bind({});
NormalTitle.args = {
  children: 'Title',
};
