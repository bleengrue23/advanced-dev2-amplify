import {
    AppLayout,
    BreadcrumbGroup,
    Container,
    ContentLayout,
    Header,
    Table,
    Box,
    SpaceBetween,
    Link,
} from "@cloudscape-design/components";
import SideBar from "@/components/Guest/GuestSidebar";
import React from "react";
import AddCategory from "@/components/AddCategory";
import ListCategories from "@/components/ListCategories";
import { useCategories } from "@/hooks/useCategories";

const Content = () => {
    const { categories } = useCategories();
    return (
        <ContentLayout header={<Header variant="h1">Categories</Header>}>
            <Container
                header={
                    <Header variant="h2">
                        Categories
                    </Header>
                }
            >
                <Table
                    ariaLabels={{
                        selectionGroupLabel: "Items selection",
                        allItemsSelectionLabel: ({ selectedItems }) =>
                            `${selectedItems.length} ${selectedItems.length === 1 ? "item" : "items"
                            } selected`,
                        itemSelectionLabel: ({ selectedItems }, item: any) => item.name,
                    }}
                    columnDefinitions={[
                        {
                            id: "name",
                            header: "Category name",
                            cell: (item: any) => <Link href={"/categories/shop?category=" + item.name.toLowerCase()}>{item.name}</Link>,
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
                        { text: "Categories", href: "/categories" },
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
