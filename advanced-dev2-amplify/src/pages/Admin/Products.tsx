import { Product } from "@/API";
import { getAllProducts } from "@/api/products";
import AddProduct from "@/components/AddProduct";
import SideBar from "@/components/Admin/AdminSidebar";
import DeleteProduct from "@/components/DeleteProduct";
import ListProducts from "@/components/ListProducts";
import { useProducts } from "@/hooks/useProducts";
import {
  AppLayout,
  BreadcrumbGroup,
  Container,
  ContentLayout,
  Header,
  SpaceBetween,
} from "@cloudscape-design/components";
import React, { useEffect, useState } from "react";

const Content = () => {
  const [selectedItem, setSelectedItem] = useState<Product[]>([]);
  const { products } = useProducts();

  return (
    <ContentLayout header={<Header variant="h1">Admin Portal</Header>}>
      <Container
        header={
          <Header
            actions={
              <SpaceBetween size="m" direction="horizontal">
                <DeleteProduct item={selectedItem} />
                <AddProduct />
              </SpaceBetween>
            }
            variant="h2"
          >
            Products
          </Header>
        }
      >
        <ListProducts
          products={products}
          selectedItem={selectedItem}
          setSelectedItem={(item: any) => setSelectedItem(item)}
        />
      </Container>
    </ContentLayout>
  );
};

function Products() {
  return (
    <AppLayout
      breadcrumbs={
        <BreadcrumbGroup
          items={[
            { text: "Home", href: "/" },
            { text: "Admin Portal", href: "/admin" },
            { text: "Products", href: "/admin/products" },
          ]}
        />
      }
      navigation={<SideBar />}
      toolsHide={true}
      content={<Content />}
    />
  );
}

export default Products;
