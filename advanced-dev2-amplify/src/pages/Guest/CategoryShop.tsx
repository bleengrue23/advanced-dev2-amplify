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
import { useState, useEffect } from "react";


const Content = () => {

    const queryParameters = new URLSearchParams(window.location.search)
    const category = queryParameters.get("category")

    const { products } = useProducts();
    const { categories } = useCategories();

    let categoryProducts = [];

    // NEEDS TO BE CHANGED TO CATEGORY WHEN IT IS ADDED TO THE OBJECTS!!!
    for (let i = 0; i < products.length; i++) {
        if (products[i].name === "Test Item")
        {
            categoryProducts.push(products[i]);
        }
    }
   
    return (
        <ContentLayout header={<Header variant="h1">Shop</Header>}>
            <Container
                header={<Header variant="h2">Shop by Category</Header>}
            >
                <ListProducts products={categoryProducts} />
            </Container>
        </ContentLayout>
    );
};

function CategoryShop() {

    const queryParameters = new URLSearchParams(window.location.search)
    const category = queryParameters.get("category")


    return (
        <AppLayout
            breadcrumbs={
                <BreadcrumbGroup
                    items={[
                        { text: "Home", href: "/" },
                        { text: "Categories", href: "/categories" },
                        { text: "Shop by Category", href: "/categories/shop?category=" + category },
                    ]}
                />
            }
            navigation={<SideBar />}
            toolsHide={true}
            content={<Content />}
        />
    );
}

export default CategoryShop;
