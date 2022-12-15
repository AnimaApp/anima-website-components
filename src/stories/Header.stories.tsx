import { AnTitle } from "../components";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Anima/AnTitle",
  component: AnTitle,
  argTypes: {
    label: {
      control: {
        type: "text",
      },
    },
  },
} as ComponentMeta<typeof AnTitle>;

const Template: ComponentStory<typeof AnTitle> = (args) => (
  <AnTitle {...args} />
);
export const Header = Template.bind({});
Header.args = {
  label: "Title",
};
