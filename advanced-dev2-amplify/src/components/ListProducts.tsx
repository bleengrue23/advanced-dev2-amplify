import { Product } from "@/API";
import { getAllProducts } from "@/api/products";
import {
  Box,
  Button,
  Cards,
  Link,
  SpaceBetween,
  Spinner,
} from "@cloudscape-design/components";
import React from "react";

type ListProductsProps = {
  selectedItem?: any;
  setSelectedItem?: any;
  products: Product[];
};

function ListProducts({
  selectedItem,
  setSelectedItem,
  products,
}: ListProductsProps) {
  return (
    <Cards
      onSelectionChange={({ detail }: any) =>
        setSelectedItem(detail?.selectedItems ?? [])
      }
      selectedItems={selectedItem}
      ariaLabels={{
        itemSelectionLabel: (e: any, i: any) => `select ${i.name}`,
        selectionGroupLabel: "Item selection",
      }}
      cardDefinition={{
        header: (item: any) => (
          <Link href="#" fontSize="heading-m">
            {item.name}
          </Link>
        ),

        sections: [
          {
            id: "description",
            header: "Description",
            content: (item: any) => item.description,
          },
          {
            id: "type",
            header: "Price",
            content: (item: any) => item.price,
          },
          //   {
          //     id: "size",
          //     header: "Size",
          //     content: (item: any) => item.size,
          //   },
        ],
      }}
      cardsPerRow={[{ cards: 1 }, { minWidth: 500, cards: 2 }]}
      items={products}
      loadingText="Loading resources"
      //   selectionType="multi"
      selectionType={selectedItem ? "single" : undefined}
      trackBy="id"
      visibleSections={["description", "type", "image"]}
      empty={
        <Box margin={{ vertical: "xs" }} textAlign="center" color="inherit">
          <SpaceBetween size="m">
            <b>No resources</b>
          </SpaceBetween>
        </Box>
      }
    />
  );
}

export default ListProducts;
