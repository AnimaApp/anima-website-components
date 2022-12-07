import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Image, Heading, Text, Stack } from "@chakra-ui/react";

import { AnCard, AnFeatureList } from "../../components/atoms";

export default {
  title: "Anima/Atoms/AnCard",
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
    <Stack spacing="3">
      <Heading size="md">Living room Sofa</Heading>
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
    <Stack spacing="3">
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
    <Stack spacing="3">
      <Heading size="md">Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
    </Stack>
  ),
};
