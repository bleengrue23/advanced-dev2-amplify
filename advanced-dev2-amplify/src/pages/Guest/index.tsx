import "@aws-amplify/ui-react/styles.css";
import { ThemeProvider, Authenticator } from "@aws-amplify/ui-react";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import React from "react";
import {
  AppLayout,
  BreadcrumbGroup,
  Container,
  ContentLayout,
  Flashbar,
  Header,
  HelpPanel,
  Link,
  SideNavigation,
  SplitPanel,
  TopNavigation,
  SpaceBetween,
  Button,
  Table,
  Input,
} from "@cloudscape-design/components";
import { I18nProvider } from "@cloudscape-design/components/i18n";
import messages from "@cloudscape-design/components/i18n/messages/all.en";

import { generateClient } from "aws-amplify/api";
import * as queries from "../../graphql/queries";
import { Product } from "@/API";
import ListProducts from "@/components/ListProducts";
import Home from "./Home";
import Categories from "./Categories";
import Sellers from "./Sellers";
import CategoryShop from "./CategoryShop";

const LOCALE = "en";

function Guest() {
  const client = generateClient();
  const [products, setProducts] = useState<Product[]>([]);

  //   const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    // List all available items
    const allItems = await client.graphql({ query: queries.listProducts });
    setProducts(allItems.data.listProducts.items);
  }

  return (
    <ThemeProvider>
      <I18nProvider locale={LOCALE} messages={[messages]}>
        <TopNavigation
          identity={{
            href: "/",
            title: "AWS Online Store",
          }}
          utilities={[
            {
              type: "button",
              title: "Seller Portal",
              text: "Seller Portal",
              ariaLabel: "Seller Portal",
              href: "/admin",
              //onClick: (signOut)
            },
          ]}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/*" element={<CategoryShop />} />
          <Route path="/sellers" element={<Sellers />} />
        </Routes>
      </I18nProvider>
    </ThemeProvider>
  );
}

export default Guest;
