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
    size: {
      control: {
        type: "select",
        options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      },
    },
    weight: {
      control: {
        type: "select",
        options: ["light", "regular", "medium", "semibold", "bold"],
      },
    },
    align: {
      control: {
        type: "select",
        options: ["left", "center", "right"],
      },
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
