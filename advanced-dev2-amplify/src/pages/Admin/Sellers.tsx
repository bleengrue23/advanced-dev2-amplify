import AddProduct from "@/components/AddProduct";
import SideBar from "@/components/Admin/AdminSidebar";
import {
  AppLayout,
  BreadcrumbGroup,
  Container,
  ContentLayout,
  Header,
} from "@cloudscape-design/components";
import React from "react";

const Content = () => {
  return (
    <ContentLayout header={<Header variant="h1">Admin Portal</Header>}>
      <Container header={<Header variant="h2">Sellers</Header>}></Container>
    </ContentLayout>
  );
};

function Sellers() {
  return (
    <AppLayout
      breadcrumbs={
        <BreadcrumbGroup
          items={[
            { text: "Home", href: "/" },
            { text: "Admin Portal", href: "/admin" },
            { text: "Sellers", href: "/admin/sellers" },
          ]}
        />
      }
      navigation={<SideBar />}
      toolsHide={true}
      content={<Content />}
    />
  );
}

export default Sellers;
