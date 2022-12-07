import { List, ListItem, ListIcon } from "@chakra-ui/react";
import { CircleCheckIcon, CircleNotCheckIcon } from "../Icons";

type AnFeatureItemProps = {
  hasFeature: boolean;
  label: string;
};

type AnFeatureListProps = {
  items: AnFeatureItemProps[];
};
export const AnFeatureList = ({ items }: AnFeatureListProps) => {
  return (
    <List spacing={3}>
      {items.map((item, index) => (
        <ListItem key={index} color="var(--white)">
          <ListIcon
            as={item.hasFeature ? CircleCheckIcon : CircleNotCheckIcon}
            color={item.hasFeature ? "var(--green-9)" : "var(--white)"}
          />
          {item.label}
        </ListItem>
      ))}
    </List>
  );
};
