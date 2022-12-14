import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Image, Title, Text, Stack } from "@mantine/core";

import { AnCard, AnFeatureList } from "../components";

export default {
  title: "Anima/AnCard",
  component: AnCard,
  argTypes: {},
} as ComponentMeta<typeof AnCard>;

const Template: ComponentStory<typeof AnCard> = (args) => <AnCard {...args} />;

export const CardWithImage = Template.bind({});
CardWithImage.args = {
  title: "Frontend Development Automation",
  dividerVariant: "solidRed",
  dividerSize: "sm",
  children: (
    <Image
      src="https://bit.ly/2Z4KKcF"
      alt="Rear view of modern home with pool"
    />
  ),
};

export const CardWithText = Template.bind({});
CardWithText.args = {
  title: "Frontend Development Automation",
  dividerVariant: "solidRed",
  dividerSize: "sm",
  children: (
    <Stack>
      <Title size="md">Living room Sofa</Title>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
    </Stack>
  ),
};

export const CardWithItems = Template.bind({});
CardWithItems.args = {
  title: "Frontend Development Automation",
  dividerVariant: "solidRed",
  dividerSize: "sm",
  children: (
    <Stack>
      <AnFeatureList
        items={[
          { label: "A lot lost in translation", hasFeature: false },
          { label: "Many iterations", hasFeature: false },
          { label: "Slow, inconsistent TTM", hasFeature: false },
        ]}
      />
    </Stack>
  ),
};

export const CardHighlighted = Template.bind({});
CardHighlighted.args = {
  title: "Frontend Development Automation",
  variant: "highlighted",
  children: (
    <Stack>
      <Title size="md">Living room Sofa</Title>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
    </Stack>
  ),
};
