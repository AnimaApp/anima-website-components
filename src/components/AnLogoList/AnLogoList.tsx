// import { Divider, SimpleGrid, Image } from "@chakra-ui/react";
import { Divider, SimpleGrid, Image } from "@mantine/core";

type AnLogoProps = {
  name: string;
  url: string;
};

type AnLogoListProps = {
  items: AnLogoProps[];
};
export const AnLogoList = ({ items }: AnLogoListProps) => {
  return (
    <>
      <Divider my="xl" color={"var(--white)"} />
      <SimpleGrid
        breakpoints={[
          { maxWidth: "md", cols: 6, spacing: "sm" },
          { maxWidth: "sm", cols: 2, spacing: "lg" },
          { maxWidth: "xs", cols: 1, spacing: "lg" },
        ]}
        cols={6}
        spacing={12}
      >
        {items.map((item, index) => (
          <Image
            key={index}
            src={item.url}
            alt={item.name}
            fit="scale-down"
            style={{ justifySelf: "center", width: '160px', height: '80px', objectFit: 'scale-down' }}
            height={80}
            width={160}
          />
        ))}
      </SimpleGrid>
      <Divider my="xl" color={"var(--white)"} />
    </>
  );
};
