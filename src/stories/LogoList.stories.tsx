import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AnLogoList } from "../components";

export default {
  title: "Anima/AnLogoList",
  component: AnLogoList,
  argTypes: {},
} as ComponentMeta<typeof AnLogoList>;

const Template: ComponentStory<typeof AnLogoList> = (args) => (
  <AnLogoList {...args} />
);

export const LogoList = Template.bind({});
LogoList.args = {
  items: [
    { name: 'Apple', url: 'https://a.storyblok.com/f/89137/x/521b76a1c0/apple-logo.svg' },
    { name: 'Netflix', url: 'https://a.storyblok.com/f/89137/x/40792874be/netflix-logo.svg' },
    { name: 'Amazon', url: 'https://a.storyblok.com/f/89137/x/33f28a72fd/amazon-logo.svg' },
    { name: 'Adobe', url: 'https://a.storyblok.com/f/89137/x/e8288078c2/adobe-logo.svg' },
    { name: 'Disney', url: 'https://a.storyblok.com/f/89137/x/dfc59cb03b/disney-logo.svg' },
    { name: 'Walmart', url: 'https://a.storyblok.com/f/89137/x/590919730c/walmart-logo.svg' },
  ],
};
