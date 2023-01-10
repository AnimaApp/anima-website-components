import { AnTitle } from "../components";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Anima/AnTitle",
  component: AnTitle,
  argTypes: {
    label: {
      control: "text",
    },
    size: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
    },
    weight: {
      control: "select",
      options: ["light", "regular", "medium", "semibold", "bold"],
    },
    align: {
      control: "select",
      options: ["left", "center", "right"],
    },
  },
} as ComponentMeta<typeof AnTitle>;

const Template: ComponentStory<typeof AnTitle> = (args) => (
  <AnTitle {...args} />
);
export const Default = Template.bind({});
Default.args = {
  label: "Title",
};
