import {
  AppLayout,
  BreadcrumbGroup,
  Container,
  ContentLayout,
  Header,
  SpaceBetween,
} from "@cloudscape-design/components";
import SideBar from "@/components/Admin/AdminSidebar";
import React from "react";
import AddCategory from "@/components/AddCategory";
import ListCategories from "@/components/ListCategories";
import ListProducts from "@/components/ListProducts";
import { useProducts } from "@/hooks/useProducts";
import AddProduct from "@/components/AddProduct";
import { useCategories } from "@/hooks/useCategories";

const Content = () => {
  const { products } = useProducts();
  const { categories } = useCategories();
  return (
    <ContentLayout header={<Header variant="h1">Admin Portal</Header>}>
      <Container
        header={
          <Header
            actions={
              <SpaceBetween size="m" direction="horizontal">
                <AddCategory />
                <AddProduct />
              </SpaceBetween>
            }
            variant="h2"
          >
            Dashboard
          </Header>
        }
      >
        <SpaceBetween size="l">
          <ListCategories categories={categories} />
          <ListProducts products={products} />
        </SpaceBetween>
      </Container>
    </ContentLayout>
  );
};

function Home() {
  return (
    <AppLayout
      breadcrumbs={
        <BreadcrumbGroup
          items={[
            { text: "Home", href: "/" },
            { text: "Admin Portal", href: "/admin" },
            { text: "Home", href: "/admin" },
          ]}
        />
      }
      navigation={<SideBar />}
      toolsHide={true}
      content={<Content />}
    />
  );
}

export default Home;
