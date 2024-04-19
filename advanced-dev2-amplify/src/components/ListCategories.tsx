import { Category } from "@/API";
import { getAllCategories } from "@/api/categories";
import { getAllProducts } from "@/api/products";
import {
  Box,
  Button,
  Cards,
  Header,
  Link,
  SpaceBetween,
  Spinner,
  Table,
} from "@cloudscape-design/components";
import React, { useEffect, useState } from "react";

type ListCategoriesProps = {
  categories: Category[];
};

function ListCategories({ categories }: ListCategoriesProps) {
  //   const [categories, setCategories] = useState(null);
  //   useEffect(() => {
  //     const fetchProducts = async () => {
  //       const res = await getAllCategories();
  //       setCategories(res as any);
  //     };
  //     fetchProducts();
  //   }, []);

  return (
    <Table
      ariaLabels={{
        selectionGroupLabel: "Items selection",
        allItemsSelectionLabel: ({ selectedItems }) =>
          `${selectedItems.length} ${
            selectedItems.length === 1 ? "item" : "items"
          } selected`,
        itemSelectionLabel: ({ selectedItems }, item: any) => item.name,
      }}
      columnDefinitions={[
        {
          id: "name",
          header: "Category name",
          cell: (item: any) => <p>{item.name}</p>,
          sortingField: "name",
          isRowHeader: true,
        },
        {
          id: "products",
          header: "Total products",
          cell: (item) => item.Items.items.length,
          sortingField: "alt",
        },
      ]}
      columnDisplay={[
        { id: "name", visible: true },
        { id: "products", visible: true },
      ]}
      items={categories}
      loadingText="Loading resources"
      trackBy="name"
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

export default ListCategories;
