import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AnButton } from "../../components/atoms";

export default {
  title: "Anima/Atoms/AnButton",
  component: AnButton,
  argTypes: {},
} as ComponentMeta<typeof AnButton>;

const Template: ComponentStory<typeof AnButton> = (args) => (
  <AnButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: "Button",
};

export const Outlined = Template.bind({});
Outlined.args = {
  children: "Button",
  variant: "outline",
};

export const Link = Template.bind({});
Link.args = {
  children: "Button",
  variant: "link",
};
