import { Box, Divider, SimpleGrid, Image } from "@mantine/core";
import { useEffect, useState } from "react";

type AnLogoProps = {
  name: string;
  url: string;
};

type AnLogoListProps = {
  items: AnLogoProps[];
  layout?: "sm" | "md" | "lg";
};
export const AnLogoList = ({ items, layout }: AnLogoListProps) => {
  const [boxWidth, setBoxWidth] = useState("760");
  const [gridCols, setGridCols] = useState(6);
  useEffect(() => {
    switch (layout) {
      case "sm":
        setBoxWidth("200");
        setGridCols(1);
        break;
      case "md":
        setBoxWidth("400");
        setGridCols(3);
        break;
      default:
        setBoxWidth("760");
        setGridCols(6);
        break;
    }
  }, [layout]);

  return (
    <Box sx={{ width: `${boxWidth}px` }}>
      <Divider my="xl" color={"var(--white)"} />
      <SimpleGrid cols={gridCols} spacing={12}>
        {items.map((item, index) => (
          <Image
            key={index}
            src={item.url}
            alt={item.name}
            fit="scale-down"
            style={{
              justifySelf: "center",
              width: "160px",
              height: "80px",
              objectFit: "scale-down",
            }}
            height={80}
            width={160}
          />
        ))}
      </SimpleGrid>
      <Divider my="xl" color={"var(--white)"} />
    </Box>
  );
};
