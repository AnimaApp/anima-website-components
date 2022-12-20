import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AnFeatureList } from "../components";

export default {
  title: "Anima/AnFeatureList",
  component: AnFeatureList,
  argTypes: {},
} as ComponentMeta<typeof AnFeatureList>;

const Template: ComponentStory<typeof AnFeatureList> = (args) => (
  <AnFeatureList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  items: [
    { label: "Devs get code, not images", hasFeature: true },
    { label: "Minimal iteration", hasFeature: true },
    { label: "2-4 faster TTM", hasFeature: true },
  ],
};
