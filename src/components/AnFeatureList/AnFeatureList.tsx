import { List, ThemeIcon } from "@mantine/core";
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
    <List spacing={"xs"}>
      {items.map((item, index) => (
        <List.Item
          key={index}
          sx={{ color: "var(--white)", marginTop: "8px" }}
          icon={
            <ThemeIcon
              sx={{
                color: item.hasFeature ? "var(--green-9)" : "var(--white)",
                backgroundColor: "unset",
              }}
              size={24}
              radius="xl"
            >
              {item.hasFeature ? <CircleCheckIcon /> : <CircleNotCheckIcon />}
            </ThemeIcon>
          }
        >
          {item.label}
        </List.Item>
      ))}
    </List>
  );
};
