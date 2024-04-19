import AddProduct from "@/components/AddProduct";
import SideBar from "@/components/Guest/GuestSidebar";
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
    <ContentLayout header={<Header variant="h1">Sellers</Header>}>
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
            { text: "Sellers", href: "/sellers" },
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
