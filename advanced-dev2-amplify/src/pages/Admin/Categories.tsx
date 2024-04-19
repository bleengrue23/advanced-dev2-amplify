import {
  AppLayout,
  BreadcrumbGroup,
  Container,
  ContentLayout,
  Header,
} from "@cloudscape-design/components";
import SideBar from "@/components/Admin/AdminSidebar";
import React from "react";
import AddCategory from "@/components/AddCategory";
import ListCategories from "@/components/ListCategories";
import { useCategories } from "@/hooks/useCategories";

const Content = () => {
  const { categories } = useCategories();
  return (
    <ContentLayout header={<Header variant="h1">Admin Portal</Header>}>
      <Container
        header={
          <Header actions={<AddCategory />} variant="h2">
            Categories
          </Header>
        }
      >
        <ListCategories categories={categories} />
      </Container>
    </ContentLayout>
  );
};

function Categories() {
  return (
    <AppLayout
      breadcrumbs={
        <BreadcrumbGroup
          items={[
            { text: "Home", href: "/" },
            { text: "Admin Portal", href: "/admin" },
            { text: "Categories", href: "/admin/categories" },
          ]}
        />
      }
      navigation={<SideBar />}
      toolsHide={true}
      content={<Content />}
    />
  );
}

export default Categories;
