import {
    AppLayout,
    BreadcrumbGroup,
    Container,
    ContentLayout,
    Header,
    SpaceBetween,
} from "@cloudscape-design/components";
import React from "react";
import AddCategory from "@/components/AddCategory";
import ListCategories from "@/components/ListCategories";
import ListProducts from "@/components/ListProducts";
import { useProducts } from "@/hooks/useProducts";
import AddProduct from "@/components/AddProduct";
import { useCategories } from "@/hooks/useCategories";
import SideBar from "@/components/Guest/GuestSidebar";


const Content = () => {
    const { products } = useProducts();
    const { categories } = useCategories();
    return (
        <ContentLayout header={<Header variant="h1">Home</Header>}>
            <Container
                header={<Header variant="h2">All Products</Header>}
            >
                <ListProducts products={products} />
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
